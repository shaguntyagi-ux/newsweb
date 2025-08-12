import React, { useEffect,useState } from 'react'
import Test1 from './Test1';
import News from './News';
import Loding from './Loding';
import InfiniteScroll from "react-infinite-scroll-component";
// import React,{useState} from 'react';
// import React,{useEffect} from 'react';



const  SearchInput = (props) => {
  const article =
    [
      // {
      //   "source": {
      //     "id": "nbc-news",
      //     "name": "NBC News"
      //   },
      //   "author": "Rob Wile",
      //   "title": "Federal Reserve interest rate decision June 2025: What to know. - NBC News",
      //   "description": "If the economy seems to be increasingly veering off course, the worse may be yet to come.",
      //   "url": "https://www.nbcnews.com/business/economy/federal-reserve-interest-rate-decision-june-2025-what-to-know-rcna213387",
      //   "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-06/250616-jerome-powell-ac-1138p-2871a3.jpg",
      //   "publishedAt": "2025-06-18T09:00:00Z",
      //   "content": "If the economy seems to be increasingly veering off course, the worse may be yet to come. \r\nThe Federal Reserve is set to leave interest rates unchanged as it continues to assess the economic impact … [+4013 chars]"
      // },
      // {
      //   "source": {
      //     "id": null,
      //     "name": "Motor1 "
      //   },
      //   "author": "Lawrence Ulrich",
      //   "title": "'America's Hypercar:' The New Chevy Corvette ZR1X Aims to Take Down Ferrari - Motor1.com",
      //   "description": "Chevrolet’s new Corvette ZR1X has its sights set on the Ferrari F80 and McLaren W1 with a 1,250-horsepower hybrid V-8.",
      //   "url": "https://www.motor1.com/news/762876/chevy-corvette-zr1x-horsepower-price-details/",
      //   "urlToImage": "https://cdn.motor1.com/images/mgl/0eO903/s1/2026-chevrolet-corvette-zr1x.jpg",
      //   "publishedAt": "2025-06-18T08:22:34Z",
      //   "content": "The 2025 Corvette ZR1 may already be the fastest rear-wheel-drive car to touch down on our planet: A record-stomping track monster that crushes 60 miles per hour in 2.2 seconds, and whose 233-mph top… [+10479 chars]"
      // },
      // {
      //   "source": {
      //     "id": "bloomberg",
      //     "name": "Bloomberg"
      //   },
      //   "author": "Andre Janse Van Vuuren",
      //   "title": "Oil Rally Builds as Middle East Unrest Deepens: Markets Wrap - Bloomberg.com",
      //   "description": "Stocks and bonds posted small gains, with investors staying on the sidelines before the Federal Reserve’s monetary policy decision and release of new forecasts for the economy. Oil pulled back from a near five-month high.",
      //   "url": "https://www.bloomberg.com/news/articles/2025-06-17/stock-market-today-dow-s-p-live-updates",
      //   "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i05fC67xSO_k/v1/1200x800.jpg",
      //   "publishedAt": "2025-06-18T07:30:55Z",
      //   "content": "Stocks and bonds posted small gains, with investors staying on the sidelines before the Federal Reserves monetary policy decision and release of new forecasts for the economy. Oil pulled back from a … [+242 chars]"
      // },
      // {
      //   "source": {
      //     "id": "the-verge",
      //     "name": "The Verge"
      //   },
      //   "author": "Tina Nguyen",
      //   "title": "Senate passes GENIUS stablecoin bill in a win for the crypto industry - The Verge",
      //   "description": "The Genius Act to regulate US dollar-pegged stablecoin is the first major digital assets bill to pass in the Senate.",
      //   "url": "https://www.theverge.com/cryptocurrency/688903/genius-act-stablecoin-senate-federal-crypto-regulation",
      //   "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK428_CRYPTO_D.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      //   "publishedAt": "2025-06-18T01:48:00Z",
      //   "content": "The bill establishes a federal regulatory framework for stablecoin, allowing private companies to create their own digital dollars.\r\nIn a 68-30 vote on Tuesday evening, the Senate overwhelmingly pass… [+2124 chars]"
      // },
      // {
      //   "source": {
      //     "id": null,
      //     "name": "Yahoo Entertainment"
      //   },
      //   "author": "Makiko Yamazaki and Tim Kelly",
      //   "title": "Japan's exports post first drop in 8 months as auto firms hit by US tariffs - Yahoo Finance",
      //   "description": "TOKYO (Reuters) -Japan's exports fell in May for the first time in eight months as big automakers like Toyota were hit by sweeping U.S. tariffs, and the...",
      //   "url": "https://finance.yahoo.com/news/japan-exports-post-first-drop-001237811.html",
      //   "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/f4fb4ac09d865ae38e1ff24b7fd58ebd",
      //   "publishedAt": "2025-06-18T00:12:00Z",
      //   "content": "By Makiko Yamazaki and Tim Kelly\r\nTOKYO (Reuters) -Japan's exports fell in May for the first time in eight months as big automakers like Toyota were hit by sweeping U.S. tariffs, and the failure of T… [+5064 chars]"
      // },
      // {
      //   "source": {
      //     "id": "bloomberg",
      //     "name": "Bloomberg"
      //   },
      //   "author": "Carter Johnson, Saleha Mohsin, Ruth Carson",
      //   "title": "Trump Is Driving Off Investors and Threatening the Dollar’s Reign - Bloomberg.com",
      //   "description": "The president’s economic agenda is dragging down the dollar and making it more difficult for the US to finance its deficits.",
      //   "url": "https://www.bloomberg.com/news/articles/2025-06-17/trump-agenda-pressures-dollar-as-us-debt-hits-new-highs",
      //   "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0lYosvKzY78/v1/1200x800.jpg",
      //   "publishedAt": "2025-06-17T23:35:08Z",
      //   "content": "There is no better barometer of global investors repudiation of President Donald Trumps policies than the dollar. Since he took office, its lost more than 10% of its value against the euro, pound and… [+649 chars]"
      // },
      // {
      //   "source": {
      //     "id": null,
      //     "name": "CNBC"
      //   },
      //   "author": "Reuters",
      //   "title": "General Mills to remove artificial colors from all its U.S. cereals and foods - CNBC",
      //   "description": "General Mills said on Tuesday it would remove artificial colors from its full U.S. retail portfolio by the end of 2027.",
      //   "url": "https://www.cnbc.com/2025/06/17/general-mills-to-remove-artificial-colors-from-all-its-us-cereals-and-foods.html",
      //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/108133281-1744892321739-gettyimages-2210616171-dsc07451_uwstsg4r.jpeg?v=1744892367&w=1920&h=1080",
      //   "publishedAt": "2025-06-17T23:16:45Z",
      //   "content": "General Mills said on Tuesday it would remove artificial colors from its full U.S. retail portfolio by the end of 2027.\r\nThe Cheerios maker also said it would remove synthetic dyes from all its U.S. … [+734 chars]"
      // },
      // {
      //   "source": {
      //     "id": "business-insider",
      //     "name": "Business Insider"
      //   },
      //   "author": "Eugene Kim",
      //   "title": "Amazon employees slam CEO Andy Jassy's memo about AI killing corporate jobs - Business Insider",
      //   "description": "Andy Jassy's AI-driven planned workforce reductions at Amazon prompts employee backlash and calls for a shift in leadership approach.",
      //   "url": "https://www.businessinsider.com/amazon-employees-criticize-ceo-jassys-ai-driven-job-cutting-plan-2025-6",
      //   "urlToImage": "https://i.insider.com/6851ee9885e81483682c4b9d?width=1200&format=jpeg",
      //   "publishedAt": "2025-06-17T23:11:00Z",
      //   "content": "Amazon CEO Andy Jassy told employees Tuesday that AI will shrink the company's corporate white-collar workforce over the next few years, citing \"efficiency gains\" as the driving force.\r\nAmazon employ… [+3592 chars]"
      // },
      // {
      //   "source": {
      //     "id": "techcrunch",
      //     "name": "TechCrunch"
      //   },
      //   "author": "Maxwell Zeff",
      //   "title": "Sam Altman says Meta tried and failed to poach OpenAI’s talent with $100M offers - TechCrunch",
      //   "description": "OpenAI CEO Sam Altman said that Meta tried to poach its employees with nine-figure offers, but failed to recruit OpenAI's best people.",
      //   "url": "https://techcrunch.com/2025/06/17/sam-altman-says-meta-tried-and-failed-to-poach-openais-talent-with-100m-offers/",
      //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-1535376729-e1731897472270.jpg?resize=1200,798",
      //   "publishedAt": "2025-06-17T22:31:28Z",
      //   "content": "Meta CEO Mark Zuckerberg has been on something of a hiring spree lately, trying to staff up Meta’s new superintelligence team with top-tier AI researchers from competing labs. To work on a team led b… [+3232 chars]"
      // },
      // {
      //   "source": {
      //     "id": null,
      //     "name": "New York Post"
      //   },
      //   "author": "Adriana Diaz",
      //   "title": "Amazon makes drastic change to this year’s Prime Day that will benefit bargain shoppers - New York Post",
      //   "description": "This is the annual sale’s first major change since 2017.",
      //   "url": "https://nypost.com/2025/06/17/lifestyle/amazon-prime-day-2025-extending-to-four-days/",
      //   "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/06/106665900.jpg?quality=75&strip=all&w=1024",
      //   "publishedAt": "2025-06-17T22:23:00Z",
      //   "content": "Here’s a primer on the upcoming Amazon deals. \r\nAmazons Prime Day is about to get even bigger and bargain hunters will soon have a whole lot more time to score incredible deals.\r\nFor the first time, … [+2268 chars]"
      // }
    ]
    


  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     articles: this.article,
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //     // category:''
  //   }
  //   document.title=props.category

  // }
  const [articles, setArticles] = useState(article);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title=props.category
  // handle=(e)=>{
  //   this.setState({category:'business'})
  // }


  //         async componentDidMount() {
  //   const { category } = props;
  //   if (category) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=39614612ae0b470dbfd7596453fb81e7&page=1`;
  //     let data = await fetch(url);
  //     let main = await data.json();
  //     this.setState({ articles: main.articles });
  //   }
  // }

  // async componentDidUpdate(prevProps) {
  //   if (prevProps.category !== props.category) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=39614612ae0b470dbfd7596453fb81e7`;
  //     let data = await fetch(url);
  //     let main = await data.json();
  //     this.setState({ articles: main.articles }); 
  //   }
  // }
   const update=async()=> {
    // let url=`https://newsapi.org/v2/everything?q=India&category=${props.category}&apiKey=39614612ae0b470dbfd7596453fb81e7&page=${this.state.page}&pageSize=${props.pagesize}`
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f74a94d13a9d444ea571fd6f19f271dc&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url)
    let main = await data.json()
    
      setArticles( main.articles)
      setLoading( main.totalResults)
      setLoading(false)
    
  }



  // const componentDidMount=async()=> {
  //   //   const {  pagesize } = props;
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=39614612ae0b470dbfd7596453fb81e7&page=1&pageSize=${props.pagesize}`;
  //   // this.setState({ loading: true })
  //   // let data = await fetch(url)
  //   // let main = await data.json()
  //   // this.setState({
  //   //   articles: main.articles,
  //   //   totalResults: main.totalResults,
  //   //   loading: false,
  //   // })
  //   update();
  // }
  useEffect(() => {
     update();
  },[])
  // next = async () => {
  //   // const { category, pagesize } = props;
  //   //   if(this.state.page+1 > Math.ceil(this.state.totalResults/props.pagesize )){

  //   //   }
  //   //   else{
  //   //   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=39614612ae0b470dbfd7596453fb81e7&page=${this.state.page+1}&pageSize=${props.pagesize}`;
  //   //  this.setState({loading:true})
  //   //   let data= await fetch(url)
  //   //   let main=await data.json()
  //   this.setState({
  //     // articles:main.articles,
  //     page: this.state.page + 1,
  //     // loading:false

  //   })
  //   this.update();

  // }
  // prev = async () => {
  //   //   const { category, pagesize } = props;
  //   //   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=39614612ae0b470dbfd7596453fb81e7&page=${this.state.page-1}&pageSize=${props.pagesize}`;
  //   //  this.setState({loading:true})
  //   //   let data= await fetch(url)
  //   //   let main=await data.json()
  //   this.setState({
  //     // articles:main.articles,
  //     page: this.state.page - 1,
  //     // loading:false
  //   })
  //   this.update();

  // }

  //   next=()=>{

  //   }
   const fetchMoreData = async() => {
    //  this.setState({
    //   // articles:main.articles,
    //   page: this.state.page+1
    //   // loading:false
    // })
    setPage(page + 1);
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f74a94d13a9d444ea571fd6f19f271dc&page=${page}&pageSize=${props.pagesize}`;
    // this.setState({ loading: true })
    let data = await fetch(url)
    let main = await data.json()
  
      // articles: main.articles,
      setArticles(articles.concat(main.articles))
      setTotalResults( main.totalResults)
      setLoading( false)
    // })
   
  
  };


 
    //    const style={
    //   display:'grid',
    //  gridTemplateColumns:'repeat(3, 1fr)',
    //  gap:'50px',
    //  marginLeft:'50px',
    //  marginTop:'50px'



    // }
    return (
      <div>

        <Test1 />
        {loading && <Loding />}
         <h1 style={{textAlign:'center',marginTop:'130px'}}>Top {props.category} Headlines</h1>
        {/* <Test1 onCategoryChange={this.handleCategoryChange} /> */}
         <InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length !== totalResults}
  loader={<Loding />}
>

        <div className={`parant text-bg-light`} >
{/* !this.state.loading && */}
          <div className='child'>
         {articles.map((element) => {

              return <div key={element.url} > <News author={element.author} date={element.publishedAt} name={element.source.name} imageurl={element.urlToImage} discription={element.description} title={element.title} newsurl={element.url} /> </div>
            })}
           



          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '50px', marginTop: '50px', marginRight: '50px' }}>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.prev}>&larr;previus</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pagesize)} type="button" className="btn btn-primary" onClick={this.next}> next &rarr;</button>
          </div> */}
        </div>
         </InfiniteScroll>
      </div>


    )
  }





// export class App extends Component {
//   //  constructor() {
//   //   super();
//   //   this.state = {
//   //     category: ''
//   //   };
//   // }

//   // Receive category from SearchInput component
//   // handleCategoryChange = (value) => {
//   //   this.setState({ category: value });
//   // };
//   render() {



//     return (
//       <div>
//            <Test1 onCategoryChange={this.handleCategoryChange} />
//         {/* <SearchInput onCategoryChange={this.handleCategoryChange} /> */}
//          {/* <User category={this.state.category} /> */}
//          <User category='bussiness' />
//       </div>
//     )
//   }
// }
// App.defaultProps = {
//   pagesize: 3,
//   category: 'business'
// };
export default SearchInput







//cd "C:\Users\shagu\OneDrive\Desktop\reacttasing\testing"
