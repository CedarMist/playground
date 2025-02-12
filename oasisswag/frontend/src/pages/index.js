import {Header} from "../components/Header";
import {Wheel} from "../components/Wheel";
import {useWeb3} from "../providers/Web3Provider";
import {useEffect} from "react";
import {Footer} from "../components/Footer";
import {FooterLinks} from "../components/FooterLinks";
import {AboutOasis} from "../components/AboutOasis";
import {ConsensusInfo} from "../components/ConsensusInfo";

export const LandingPage = () => {
  const {init} = useWeb3()

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header/>
      <Wheel/>
      <ConsensusInfo />
      <AboutOasis />
      <FooterLinks />
      <Footer />
    </>
  )
}