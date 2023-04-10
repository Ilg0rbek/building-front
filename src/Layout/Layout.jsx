import { Layout as AntdLayout } from "antd"
export const Layout = ({children}) => {
    return(
        <AntdLayout style={{background: "#fff"}}>
            {children}
        </AntdLayout>
    )
}