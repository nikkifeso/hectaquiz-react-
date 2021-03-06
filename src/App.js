// import './App.css';
import TakeButton from './components/Button/TakeChallenge';
import CreateButton from './components/Button/CreateAccount';
import LoginButton from './components/Button/Login';
import SignUpButton from './components/Button/SignUp';
import ProceedButton from './components/Button/Proceed';
import NextButton from './components/Button/Next';
import PreviousButton from './components/Button/Previous';
import Email from './components/Input/EmailInput';
import Password from './components/Input/PasswordInput';
import Username from './components/Input/UsernameInput';
import {GlobalStyle} from './components/GlobalStyle/style';
import LandingNavbar from './components/Navbar/LandingNavbar';
import LoginNavbar from './components/Navbar/LoginNavbar';
import QuestionsNavbar from './components/Navbar/QuestionsNavbar';
import Logo from './components/Navbar/LogoComp';
import Category from './components/Category/CategoryComponent';
import CategoryCard from './components/Category/CategoryRectangle';
import Dropdown from './components/MenuDropdown';
import FinishedCard from './components/FinishedCard';
import HistoryCard from './components/QuizHistoryCard';
import QuestionsCard from './components/QuestionsCard';

import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp'
import SignUpSuccess from './pages/SignUpSuccess';
import Dashboard from './pages/Dashboard';
import QuestionBoard from './pages/Questions';
import FinishedPage from './pages/Finished';
import HistoryPage from './pages/History';


function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    {/* <ProgressBar question="2"/> */}
    {/* <Category category="General Knowledge"/> */}
    {/* <QuestionsNavbar backgroundColor="#FFFDF8"></QuestionsNavbar>
    <CategoryCard/> */}
      {/* <Logo></Logo>
      <LandingNavbar></LandingNavbar> */}
      {/* <LoginNavbar></LoginNavbar> */}
      {/* <QuestionsNavbar></QuestionsNavbar> */}
        {/* <div> <TakeButton/></div>
        <div> <CreateButton/></div>
        <div> <LoginButton/></div>
        <div> <SignUpButton/></div>
        <div> <ProceedButton/></div>
        <div> <NextButton text="Next Challenge"/></div>*/}
        {/* <div> <PreviousButton/></div>  */}
        {/* <Email/> */}
        {/* <Password text="Confirm Password"/>
        <Username text="Confirm Password"/> */}
        {/* <CategoryCard/>
        <FinishedCard/>
        <HistoryCard/>
        <QuestionsCard/> */}

    { /*Pages*/ }
    {/* <LandingPage/>  */}
    {/* <LoginPage/> */}
    {/* <SignUpPage/> */}
    <SignUpSuccess/>
    {/* <Dashboard/> */}
    {/* <QuestionBoard/> */}
    {/* <FinishedPage/> */}
    {/* <HistoryPage/> */}
        
    </div>
  );
}

export default App;
