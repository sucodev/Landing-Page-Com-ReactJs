import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body { margin:2rem; font-family:'Lato', sans-serif; font-weight:400; }
  img { max-width:100%; border-radius:0.5rem; object-fit:cover; } 
  a { text-decoration:none; color:black; }
  h1 { font-size:1.4rem;}

  .animeLeft { transform:translateX(-20px); opacity:0; animation:animeLeft .3s forwards; }
  @keyframes animeLeft { to { transform:initial; opacity:initial} }
  .loading { width:20px; height:20px; border-radius:50%; display:block; border:10px solid #ccc; border-right-color:transparent; animation:loading 1s infinite; }
  @keyframes loading { to { transform:rotate(360deg)}}
`;

export default GlobalStyle;
