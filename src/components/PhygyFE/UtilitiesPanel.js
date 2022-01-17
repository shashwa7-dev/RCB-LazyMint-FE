import React from "react";
//IMG imports
import eiffil from '../../static/media/eiffil.png' 
import goggles from '../../static/media/goggles.png'
import teddy  from '../../static/media/teddy.png'
import saturn from '../../static/media/saturn.png'

function RenderUtilityItem({data}){

  const downloadFile = (url) => { 
    fetch(url, {
      method: 'GET',
      mode:'cors'
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `3D_model.jpg`,
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
  
  }

   if(data.id === 2){
     return(
        <a key={data.id} onClick={(e) => alert('You must download our AR app!')}>
        <div className="utility">
          <div className="utility_icon">
            <img src={data.img_src} alt="" />
          </div>
          <div className="utility_text">
            <div className="utility_heading">{data.head}</div>
            <div className="utility_subheading">
              {data.sub_head}
            </div>
          </div>
        </div>
        </a>
     )
   }else if(data.id === 3){
     return(
      <a key={data.id} onClick={()=> downloadFile(data.url)}>
      <div className="utility">
        <div className="utility_icon">
          <img src={data.img_src} alt="" />
        </div>
        <div className="utility_text">
          <div className="utility_heading">{data.head}</div>
          <div className="utility_subheading">
            {data.sub_head}
          </div>
        </div>
      </div>
      </a>
     )
   }else{
    return(
        <a href={data.url} key={data.id} target="_blank" rel='noopener' rel="noreferrer">
        <div className="utility">
          <div className="utility_icon">
            <img src={data.img_src} alt="" />
          </div>
          <div className="utility_text">
            <div className="utility_heading">{data.head}</div>
            <div className="utility_subheading">
              {data.sub_head}
            </div>
          </div>
        </div>
      </a>
    )
    }
}
function UtilitiesPanel() {
   let items = [
    {  
    id:1,      
    img_src:eiffil,
    head:'View on IPFS',
    sub_head:'Your NFT data stored safely forever',
    url:'#'
   },
   {
    id:2,
    img_src:goggles,
    head:'View AR experience',
    sub_head:'See how your NFT looks in augmented reality',
    url:''
   },
   {
    id:3,
    img_src: teddy ,
    head:'Download 3D Model',
    sub_head:'Instantly get acccess to the blend file',
    url:'https://pbs.twimg.com/media/FIGvnCcVIAMhqp0?format=jpg&name=large'
   },
   {
    id: 4,
    img_src: saturn,
    head:'Join the community',
    sub_head:'Unlock Community access with your NFT',
    url:'https://discord.com/invite/QKt5Qr2PhA'
 }
]
  return (
    <div className="utilities">
      <div className="utilities_container">
       {items.map(item => <RenderUtilityItem data={item} />)}
      </div>
    </div>
  );
}

export default UtilitiesPanel;
