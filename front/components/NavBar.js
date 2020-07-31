import React from 'react';
import styles from './NavBar.module.css'
import Link from 'next/link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classNames from 'classnames';
import Form from 'react-bootstrap/Form'
import { useRouter } from "next/router";

function NavItem ({ data }) {

  const router = useRouter();

  return (
    <>
      <Link href={data.href}>
        <a className={classNames({["nav-link"]: true,
          [router.pathname == [data.href] ? "active" : ""]: true})}>
          {data.program}</a>
      </Link>
    </>
  )
}

function NoticeItem ({ data }) {
  return (
    <>
      <p>
        <a target="_blank" rel="noopener noreferrer" href={data.href}>
          <span className={styles.date}>{data.date}</span>
          <span className={styles.notice}>{data.title}</span>
        </a>
      </p>
    </>
  )
}

const NavBar = () => {

  const navList = [
      {
        program: "42서울",
        href: "/ftseoul"
      },{
        program: "SSAFY",
        href: "/ssafy"
      },{
        program: "부스트캠프",
        href: "/boostcamp"
      },{
        program: "SOMA",
        href: "/soma"
      },{
        program: "우아한테크코스",
        href: "/woowa"
      },{
        program: "멋쟁이사자처럼",
        href: "/likelion"
      },
  ]
  const noticeList = [
    {
      title: "DREAMIN iOS Academy 교육생 모집",
      href: "https://dreamin.career/academy/ios",
      date: "D-3",
    },{
      title: "광주AI사관학교",
      href: "http://ai.gitct.kr/apply/",
      date: "마감",
    },{
      title: "예발자닷컴 오픈",
      href: "https://yebalja.com",
      date: "D-9",
    },
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbarBg}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navList.map((v) => <NavItem data={v} key={v.program}/>)}
          </Nav>
          <Form inline className={styles.rolling}>
            <div>
              {noticeList.map((v) => <NoticeItem data={v} key={v.title}/>)}
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;