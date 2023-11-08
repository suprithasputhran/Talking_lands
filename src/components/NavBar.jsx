import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import PublicIcon from '@mui/icons-material/Public';
import PlaceIcon from '@mui/icons-material/Place';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();
    return (

        <SideNav className="side-bar " onSelect={(selected) => { navigate('/' + selected) }} >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="/">
                <NavItem eventKey="" >
                    <NavIcon ><PlaceIcon style={{
                        color: 'white',
                    }} /></NavIcon>
                    <NavText style={{
                        fontSize: '1.25rem',
                        color: 'white'
                    }} >Multipoint</NavText>
                </NavItem>
                <NavItem eventKey="polygon">
                    <NavIcon> <PublicIcon style={{
                        color: 'white',
                    }} /></NavIcon>
                    <NavText style={{
                        fontSize: '1.25rem',
                        color: 'white'
                    }}> Polygon</NavText>
                </NavItem>
            </SideNav.Nav>

        </SideNav >

    )
}

export default NavBar