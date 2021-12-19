import {get} from "lodash";
import Image from "next/image";
import withApollo from "../lib/withApollo";
import {
    CardEntity,
    useCardEntitiesFilterByCategoryLazyQuery,
    useCardEntitiesLengthQuery,
    useCardEntitiesQuery
} from "../generated";
import React, {ReactChild, ReactFragment, ReactPortal, useEffect} from "react";
import useState from 'react-usestateref'
import styles from '../styles/Home.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';

// @ts-ignore
import GOlDSEED from "../public/GOLDSEED.png";
// @ts-ignore
import SILVERSEED from "../public/SILVERSEED.png";
// @ts-ignore
import PLATINUMSEED from "../public/PLATINUMSEED.png";

function Home() {
    const [pageData, setPageData] = useState([])
    const [cardsCategory, setCardsCategory] = useState([])
    const [first, setFirst, firstRef] = useState(5)
    const [hasMore, setHasMore] = useState(true)
    const [categoryValue, setCategoryValue] = useState(-1)
    const cards = useCardEntitiesQuery({variables: {first: first}})
    const cardsLength = useCardEntitiesLengthQuery(); //normalde gelen datada total lenght olur ama burda bulamadığım için buna başvurdum.
    const cardsData = get(
        cards,
        "data.cardEntities",
        []
    ) as CardEntity["data"]["cardEntities"];

    const cardsDataLength = get(
        cardsLength,
        "data.cardEntities",
        []
    ) as CardEntity["data"]["cardEntities"];


    const categoryData = get(
        cards,
        "data.categoryEntities",
        []
    ) as CardEntity["data"]["categoryEntities"];


    const [getCategoryResult, {loading, data}] = useCardEntitiesFilterByCategoryLazyQuery()

    const cardsDataAfterSearch = get(
        data,
        "cardEntities",
        []
    ) as CardEntity["cardEntities"];


    useEffect(() => {
        debugger
        if (cardsDataAfterSearch !== undefined && cardsDataAfterSearch.length > 0) {
            if (!loading) {
                setPageData(cardsDataAfterSearch)
                setCardsCategory(categoryData)
                setHasMore(false)
            }

        } else {
            if(cardsData.length > 0){
                setPageData(cardsData)
                setCardsCategory(categoryData)
                hasMoreData();
            }
        }
    }, [cardsData,data,cardsLength])

    function setOffsetValue() {
        setFirst(first + 5)
    }

    function hasMoreData() {
        if (first - cardsDataLength.length  > 0) {
            setHasMore(false)
        } else {
            setHasMore(true)
        }
    }

    function getCategoryBySelected(value: number){
        setFirst(5)
        setCategoryValue(value);
        return getCategoryResult({variables: {"category_id": value, "first": 5}})
    }

    return (
        <InfiniteScroll
            dataLength={pageData.length}
            next={setOffsetValue}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <h3 className={styles.title}>
                        Token
                        <span><br/>Suite.</span>
                    </h3>

                    <p className={styles.description}>
                        NFT marketplace
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.filterDiv}>
                            <div className={styles.filterChildDiv}>
                                <p className={styles.filter}>Filter By:</p>
                                <select className={styles.select} value={categoryValue}
                                        onChange={(event) => getCategoryBySelected(event.target.value)}>
                                    <option value={-1}>CATEGORY</option>
                                    {
                                        cardsCategory ? cardsCategory.map((item: { id: string | number | readonly string[] | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, index: any) => {
                                            return <option value={item.id}>{item.name}</option>
                                        }) : <option>Loading..</option>
                                    }
                                </select>
                            </div>
                        </div>
                        {
                            pageData?.length > 0 &&
                            pageData.map((item, index) => {
                                // @ts-ignore
                                return (
                                    <div className={styles.cardContainer}>
                                        <div className={styles.imageContainer}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width="300px"
                                                height="300px"
                                            />
                                        </div>
                                        <div className={styles.titleContainer}>
                                            <div>
                                                <h3 className={styles.titleCard}>XSullo</h3>
                                                <h3 className={styles.titleCard}>Nocturnal Bloom</h3>
                                            </div>
                                            <div className={styles.titleImageContainer}>
                                                { item.category.id == 1 ?
                                                    <Image src={PLATINUMSEED}
                                                           alt={item.category.name}
                                                           width="20px"
                                                           height="40px"
                                                    /> : item.category.id == 2 ?
                                                        <Image src={GOlDSEED}
                                                               alt={item.category.name}
                                                               width="20px"
                                                               height="40px"
                                                        /> : <Image src={SILVERSEED}
                                                                    alt={item.category.name}
                                                                    width="20px"
                                                                    height="40px"
                                                        />
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.descriptionContainer}>
                                            <div>
                                                <h3 className={styles.descriptionName}>{item.category.name}</h3>
                                                <h4 className={styles.descriptionCategory}>category</h4>
                                            </div>
                                            <div>
                                                <h3 className={styles.descriptionCount}>{item.weight}</h3>
                                                <h4 className={styles.descriptionType}>power</h4>
                                            </div>
                                        </div>
                                        <div className={styles.footer}>
                                            <h2 className={styles.footerTitle}>000.0000 ETH</h2>
                                            <h4 className={styles.footerDescription}>000.000 USD</h4>
                                            <div className={styles.footerButtonsContainer}>
                                                <button className={styles.footerButtonLeft}>BUY NOW</button>
                                                <button className={styles.footerButtonRight}>VIEW INFO</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </main>
            </div>
        </InfiniteScroll>
    )
}

export default withApollo(Home);
