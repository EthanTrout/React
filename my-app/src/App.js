import logo from './logo.svg';
import './App.css';
import FunctionalGreeting  from './components/FunctionalGreeting';
import FunctionalGreetingWithProps  from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderLists from './components/RenderLists';
import LifeCycleCDM from './components/LifeCycleCDM';

function App() {
  return (
    <div className="App">
      <LifeCycleCDM/>
    </div>
  );
}

export default App;
