import Column from "./style";
import navigationData from "../../utils/navigationData";
import {useRouter} from "next/router";
import {useSelector} from 'react-redux'

const Navigation = () => {


    const query = useRouter()

    const adminType = useSelector((store)=> store.admin.state)

    return(
        <Column>
            {adminType ?
                navigationData.map(({id, icon, title, path, profile, hidden})=> !hidden && (
                    <Column.Row key={id} href={path} className={query.pathname === path && 'active'}>
                        {icon}
                        <p>{title}</p>
                    </Column.Row>
                ))
                :
                navigationData.map(({id, icon, title, path, profile, hidden})=> !hidden && !profile && (
                    <Column.Row key={id} href={path} className={query.pathname === path && 'active'}>
                        {icon}
                        <p>{title}</p>
                    </Column.Row>
                ))
            }
        </Column>
    )
}

export default Navigation