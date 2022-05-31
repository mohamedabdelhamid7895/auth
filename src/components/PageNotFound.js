import img from './img/image.jpg'
const PageNotFound=()=>{
return(
    <div style={{textAlign:'center',fontWeight:'bold'}}>
    <img style={{width:'400px'}} src={img} alt='404 not found page'/>
    <h1 style={{textAlign:'center',color:'blue',fontWeight:'bold'}}>404-Page not found</h1>
    <p>sorry,that page doesnot exist.what would you like to do?</p>
    </div>
)
}
export default PageNotFound;