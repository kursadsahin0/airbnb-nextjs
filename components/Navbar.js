import React from 'react'
import { Navbar, Link, Button, Text, Image, Input, Dropdown, Modal, Row, Checkbox, Divider, Spacer } from '@nextui-org/react'
import { TfiWorld } from 'react-icons/tfi';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

import navbar from '../styles/Navbar.module.css'
function Navbars() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Navbar variant="sticky">
                <Navbar.Brand>
                    <Link href="/">
                        <Image width={100} height={100} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F01%2FLogo-Airbnb-2048x743.png&f=1&nofb=1&ipt=01c2016fa4dd88689bca25b293729c7ac023bd639a40fd9b92d9a10c19f7c16d&ipo=images" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content>
                    <Input clearable bordered placeholder="Search..." />
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link href='/' className={navbar.link}>Evinizi Airbnb'ye taşıyın </Navbar.Link>
                    <Navbar.Link><TfiWorld /></Navbar.Link>
                    <Navbar.Link>

                        <Button auto color="error" flat onPress={handler}>
                            Kaydolun
                        </Button>
                        <Modal
                            closeButton
                            blur
                            aria-labelledby="modal-title"
                            open={visible}
                            onClose={closeHandler}
                        >
                            <Modal.Header>
                                <Text b size={18}>
                                    Airbnb'ye Hoş Geldiniz
                                </Text>
                            </Modal.Header>
                            <Modal.Body>
                                <select className={navbar.select}>
                                    <option value="australia">Amerika Birleşik Devletleri (+1)</option>
                                    <option value="usa">Avusturya</option>
                                    <option value="usa">Fransa</option>
                                    <option value="usa">Hollanda</option>
                                    <option value="usa">Türkiye</option>
                                    <option value="canada">Yunanistan</option>
                                    
                                   
                                </select>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Telefon Numarası"
                                    
                                />
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Email"
                                    
                                />
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Password"
                                   
                                />
                              <Button auto flat color="error" >
                                    Devam Et
                                </Button>
                               <Text color='gray' style={{cursor:"pointer",textAlign:"center"}}> veya  </Text>
                                
                               <Button auto flat color="white" className={navbar.btn}>
                                <SiFacebook/>
                                <Spacer y={2}/>
                                <Text>Facebook</Text>
                                </Button>
                                
                                <Button auto flat color="white" className={navbar.btn}>
                                <FcGoogle/>
                                <Spacer y={3}/>
                                <Text>Google</Text>
                                </Button>

                                <Button auto flat color="white" className={navbar.btn}>
                                <BsApple/>
                                <Spacer y={3}/>
                                <Text>Apple</Text>
                                </Button>

                                <Button auto flat color="white" className={navbar.btn}>
                                <HiMail/>
                                <Spacer y={3}/>
                                <Text>E-posta</Text>
                                </Button>
                            </Modal.Body>
                           
                        </Modal>



                    </Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default Navbars
