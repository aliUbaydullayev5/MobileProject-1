import Container from "./style";
// import NavBar from "../components/NavBar";
// import Navigation from "../components/Navigation";
import navigationData from "../utils/navigationData";
import {useRouter} from "next/router";

const Root = ({children}) => {

    const query = useRouter()

    return(
        <Container>
            {/*<NavBar />*/}
            <Container.Main>
                <Container.Navigation>
                    {/*<Navigation />*/}
                </Container.Navigation>
                <Container.Products>
                    <Container.Mini>
                        <Container.PathText>
                            Заявки &nbsp;{`>`}&nbsp;
                            <span>
                                {navigationData.map(({title, path, id})=>
                                    path === query.pathname && <span key={id}>{title}</span>
                                )}
                            </span>
                        </Container.PathText>
                        {children}
                    </Container.Mini>
                </Container.Products>
            </Container.Main>
        </Container>
    )
}

export default Root