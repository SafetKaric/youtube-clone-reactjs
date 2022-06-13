import Header from './components/Header/Header'
import SideBarNav from './components/ui/SideBarNav'
import Fields from './components/ui/Fields'
import Videos from './components/Videos/Videos'

function App() {
    return (
        <div className="w-full h-full relative">
            <Header />
            <SideBarNav />
            <Fields />
            <Videos />
        </div>
    )
}

export default App
