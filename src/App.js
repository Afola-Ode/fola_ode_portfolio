import "./App.css";
import bannerImage from "./images/fola_ode_bg.png";
import logo from "./images/folaode.png";
import hamburger from "./images/menu.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import behance from "./images/behance.png";
import down from "./images/down.png";

import CodeTyping from "./components/codetyping";

function App() {
  return (
    <section
      className='bg-cover bg-center h-screen px-10'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <header className='flex justify-between items-center w-full h-24 max-w-7xl mx-auto fixed top-0'>
        <img src={logo} alt='fola ode logo' className='h-14' />
        <img src={hamburger} alt='hamburger menu' className='' />
      </header>
      <section className='flex justify-between items-center max-w-7xl mx-auto body-height'>
        <div id='socials' className='w-12 fixed bottom-6'>
          <a href='#'>
            <img src={github} alt='fola ode github' className='mb-4 block' />
          </a>
          <a href='#'>
            <img
              src={linkedin}
              alt='fola ode linkedin'
              className='mb-4 block'
            />
          </a>
          <a href='#'>
            <img src={twitter} alt='fola ode twitter' className='mb-4 block' />
          </a>
          <a href='#'>
            <img
              src={instagram}
              alt='fola ode instagram'
              className='mb-4 block'
            />
          </a>
          <a href='#'>
            <img src={behance} alt='fola ode behance' className='mb-4 block' />
          </a>
        </div>
        <div>
          <div
            id='intro'
            className='pl-12 w-[76rem] text-start flex justify-center items-center'
          >
            <div>
              <h1 className='text-7xl font-bold bg-gradient-to-r from-[#c16296] via-[#e4bcd2] to-[#ffb798] bg-clip-text mb-2'>
                <CodeTyping />
              </h1>
              <p className='text-3xl text-[#d38fb4] font-bold mb-2'>
                I build visually stunning experiences, one line of code at a
                time.
              </p>
              <p className='text-[#d38fb4]'>
                With a keen eye for detail, I strive to build applications that
                not only meet the <br />
                requirements but provide an excellent user experience.
              </p>
              <a href='#' className='flex justify-center'>
                <div className='fixed bottom-6 flex fade-in-out'>
                  <span className='text-[#d38fb4]'>Scroll down</span>
                  <img src={down} alt='arrow down' className='' />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div id='nav__controls' className='w-12 fixed bottom-6 right-0'>
          <a href='#'>
            <img src={github} alt='fola ode github' className='mb-4 block' />
          </a>
          <a href='#'>
            <img
              src={linkedin}
              alt='fola ode linkedin'
              className='mb-4 block'
            />
          </a>
          <a href='#'>
            <img src={twitter} alt='fola ode twitter' className='mb-4 block' />
          </a>
          <a href='#'>
            <img
              src={instagram}
              alt='fola ode instagram'
              className='mb-4 block'
            />
          </a>
          <a href='#'>
            <img src={behance} alt='fola ode behance' className='mb-4 block' />
          </a>
        </div>
      </section>
{/* <section className=" body-height">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut, sapiente, culpa ad magni assumenda, accusantium facere id reiciendis sint soluta. Nihil earum, autem molestiae laborum, unde totam vitae ipsam dolorum itaque adipisci ex laboriosam perferendis rem, voluptatum culpa omnis! Ab ullam esse unde, aliquid quasi ipsa placeat dignissimos temporibus exercitationem cupiditate laborum voluptas incidunt harum dolor nostrum, tempore hic tempora cumque. Quam in animi nobis distinctio voluptas quibusdam, incidunt ea quo aperiam temporibus dolor quas eum excepturi. Ut, tenetur iste. Consequatur, dolorum aliquam. Facere accusamus, fuga sed dolorum, inventore quo perspiciatis doloremque fugit nulla, temporibus mollitia quas repellendus cum.
</section> */}
    </section>
  );
}
export default App;
