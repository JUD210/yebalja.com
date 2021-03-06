import React from "react";
import Layout from "../components/commons/Layout";
import Header from "../components/commons/Header";
import TeamMembers from "../components/teams/TeamMembers";
import TeamDrawing from "../components/teams/TeamDrawing";
import TeamDonation from "../components/teams/TeamDonation";

const About = () => {
  return (
    <Layout>
      <TeamDrawing />
      <TeamMembers />
      <Header>
        <h2>예발자닷컴 응원하기</h2>
        <p>후원에 힘입어 더 좋은 사이트로 보답하겠습니다.</p>
      </Header>
      <TeamDonation />
    </Layout>
  );
};

export default About;
