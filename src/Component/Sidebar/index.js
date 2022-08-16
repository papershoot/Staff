import { LogoutTwoTone, Person, Settings } from "@mui/icons-material";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";



function Sidebar() {
    return (
        <List>
            <ListItemButton onClick={() => (window.location.href = '/home')}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <ListItemText>
                    List Staff
                </ListItemText>
            </ListItemButton>
            <div className="bottom-menu" style={{}}>

                <ListItemButton>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText>
                        Setting
                    </ListItemText>
                </ListItemButton>
                <ListItemButton
                    onClick={() => (window.location.href = '/logout')}
                >
                    <ListItemIcon>
                        <LogoutTwoTone />
                    </ListItemIcon>
                    <ListItemText>
                        Đăng Xuất
                    </ListItemText>
                </ListItemButton>
            </div>

        </List>
    )


}

export default Sidebar;