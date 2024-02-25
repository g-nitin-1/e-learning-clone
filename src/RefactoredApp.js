import './App.css';
import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from './context/themeContext';
import Title from "./components/Title";
import Header from "./components/Header";
import Modal from './components/Modal';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import TestimonialsList from './components/Lists/TestimonialsList';
import LoginForm from './components/page-components/LoginForm';
import RegistrationForm from './components/page-components/RegistrationForm';
import Categories from './sections/Categories';
import Offers from './sections/Offers';

function App() {
  const [showCourseModal, setShowCourseModal]=useState(false);

  const [showOffers, setShowOffers]=useState(false);

  const [goToTopArrow, setGoToTopArrow] = useState(false);

  const [forms, setForms] =useState({
    loginForm: false,
    registrationForm: false, 
  });


  const [login, setLogin] = useState(false);

  const {theme} =useContext(ThemeContext)

  const offersRef = useRef();
  const topRef = useRef();
  

  function handleStartLearningEvent(){
    setShowCourseModal(true);
  }
  function handleModalCancelEvent(){
    setShowCourseModal(false);
  };

  const handleShowOffers= ()=> {
    showOffers=== false ? setShowOffers(true) : setShowOffers(false);
  };

  const handleScrollToOffers = () =>{
    offersRef.current.scrollIntoView({ behaviour:"Smooth"})
  }

  const handleGoToTop = () =>{
    topRef.current.scrollIntoView({ behaviour:"smooth"})
  }

  const handleShowLoginForm = () => {
    setForms({ registrationForm:false, loginForm:true });
  }

  const handleCancelLoginForm = () =>{
    setForms({ ...forms, loginForm:false });
  }

  function handleLoginFormValidation(){
    setForms({ ...forms, loginForm:false });
    setShowCourseModal(false);
    setLogin(true);
  }

  function handleShowRegisterForm(){
    setForms({ loginForm:false, registrationForm:true});
  }

  const handleCancelRegistrationForm = () =>{
    setForms({ ...forms, RegistrationForm:false });
  }

  function scrollFunction(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20)
    {
      setGoToTopArrow(true);
    }
    else{
      setGoToTopArrow(false);
    }
  }

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  },[] )

  return (
    <>
    <div className="container container-lg" ref={topRef}>
      <Header login={login} handleStartLearningEvent={handleStartLearningEvent} handleScrollToOffers={handleScrollToOffers}>
      </Header>
      <main>
  <Categories login={login} handleStartLearningEvent={handleStartLearningEvent} />
      <Offers offersRef={offersRef} showOffers={showOffers} handleShowOffers={handleShowOffers}/>
      <section className="testimonials my-4">
      <Title classes={"subtitle text-center mb-4"}
      text="What our users say"
      />
      <div className="testimonials-container">
      <TestimonialsList />
      </div>
      </section>
      </main>
    </div>
    {showCourseModal && 
      (<Modal title={"Access denied"} text="Please login inorder to access this content" cancelEvent={handleModalCancelEvent}
        loginEvent={!login && handleShowLoginForm}/>)}
    {
      goToTopArrow && (<BsArrowUpCircleFill className="goToTopArrow"
      onClick={handleGoToTop} color={theme=== "dark" && "#ff9800"}/>)
    }
    {forms.loginForm && 
    (<div className="modal">
    <LoginForm handleCancel={handleCancelLoginForm}
    loggedIn={handleLoginFormValidation}
    showRegister={handleShowRegisterForm}/>
    </div>)}

    {forms.registrationForm && 
      (<div className="modal">
      <RegistrationForm handleCancel={handleCancelRegistrationForm}
       showLogin={handleShowLoginForm}/>
      </div>)}
    </>
   
  );
}

export default App;
