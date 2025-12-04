import './Content.css';

function Content() {
  return (
    <main className="content">
      <div className="content__left">
        <img 
          src="/header_ctt.png" 
          className="content__agents-img" 
        />
      </div>

      <div className="content__right">        
        <img 
          src="/logo_cs2_header.svg" 
          className="content__logo-img"
        />
        <p className="content__description">
              The next era of Counter-Strike begins now. <br />
          Experience responsive smokes, sub-tick updates, and overhauled maps 
          in the largest technical leap forward in Counter-Strike history.
        </p>
      </div>

    </main>
  );
}
export default Content;
