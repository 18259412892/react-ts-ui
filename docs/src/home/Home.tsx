import React from 'react'
import { HashRouter, Route, Switch, Link } from "react-router-dom"
// import { ConnectedRouter } from 'connected-react-router';
import './index.scss';
import DomButton from '../dom/DomButton'
import DomMessage from '../dom/DomMessage';
import DomRow from '../dom/DomRow';
import DomMenu from '../dom/DomMenu';
import DomeHome from '../dom/DomeHome';
import DomTabs from '../dom/DomTabs';
import DomUpload from '../dom/DomUpload';
import { Menu, Layout } from 't-ui';
import DomLayout from '../dom/DomLayout';
import DomInput from '../dom/DomInput';
import DomForm from '../dom/DomForm';
import DomIcon from '../dom/DomIcon.tsx';
const { Header, Sider, Content, Footer } = Layout
export default function Home(props) {
    return (
        <HashRouter >
            <Switch >
                <React.Fragment>
                    <Layout>
                        <Header style={{ background: ' #3ba0e9' }}>
                            <div className="ant-h-tui"> React组件库</div>
                        </Header>
                        <Layout style={{ minHeight: 'calc(100vh - 60px)' }} className="i-layout-has-sider">
                            <Sider className="ant-layout-sider" style={{ maxWidth: '200px', minWidth: '200px', width: '200px' }}>
                                <Menu defaultIndex="0" size="large" model="vertical" style={{ width: 200 }}
                                    axis="right"
                                >
                                    <Menu.Item index="0">
                                        <Link to={{ pathname: '/home' }} className="active">介绍</Link>
                                    </Menu.Item>
                                    <Menu.Item index="1" >
                                        <Link to={{ pathname: '/button' }}>Button</Link>
                                    </Menu.Item>
                                    <Menu.Item index="1" >
                                        <Link to={{ pathname: '/icon' }}>Icon</Link>
                                    </Menu.Item>
                                    <Menu.Item index="2" >
                                        <Link to={{ pathname: '/message' }}>Message</Link>
                                    </Menu.Item>
                                    <Menu.Item index="62" >
                                        <Link to={{ pathname: '/Layout' }}>Layout</Link>
                                    </Menu.Item>
                                    <Menu.Item index="3" >
                                        <Link to={{ pathname: '/row' }}>栅格</Link>
                                    </Menu.Item>
                                    <Menu.Item index="4" >
                                        <Link to={{ pathname: '/menu' }}>菜单栏</Link>
                                    </Menu.Item>
                                    <Menu.Item index="5" >
                                        <Link to={{ pathname: '/tabs' }}>Tabs</Link>
                                    </Menu.Item>
                                    <Menu.Item index="5" >
                                        <Link to={{ pathname: '/Input' }}>Input</Link>
                                    </Menu.Item>
                                    <Menu.Item index="6" >
                                        <Link to={{ pathname: '/Form' }}>Form</Link>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Content className="ant-layout-content">
                                <Route exact path='/' component={DomeHome}></Route>
                                <Route exact path='/home' component={DomeHome}></Route>
                                <Route exact path='/button' component={DomButton}></Route>
                                <Route exact path='/icon' component={DomIcon}></Route>
                                <Route exact path='/message' component={DomMessage}></Route>
                                <Route exact path='/row' component={DomRow}></Route>
                                <Route exact path='/menu' component={DomMenu}></Route>
                                <Route exact path='/tabs' component={DomTabs}></Route>
                                <Route exact path='/Upload' component={DomUpload}></Route>
                                <Route exact path='/Input' component={DomInput}></Route>
                                <Route exact path='/Layout' component={DomLayout}></Route>
                                <Route exact path='/Form' component={DomForm}></Route>
                                {props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </React.Fragment>
            </Switch>
        </HashRouter>
    )
}
