import styled from "styled-components";

import { colors } from "../Styles/theme";

const aboutCards = [
  {
    title: "Frontend Implementation",
    description:
      "React를 활용해 컴포넌트 기반으로 화면을 구성하고, API 연동을 통해 데이터를 화면에 반영하는 경험을 쌓았습니다.",
  },
  {
    title: "Full-stack Understanding",
    description:
      "Spring Boot 기반 REST API와 Oracle/MySQL 데이터베이스를 함께 다루며 서비스 전체 흐름을 이해하려고 노력해왔습니다.",
  },
  {
    title: "Responsible Collaboration",
    description:
      "팀 프로젝트에서 역할을 나누고 프론트엔드와 백엔드 사이의 흐름을 정리하며, 맡은 기능을 끝까지 완성하는 태도를 중요하게 생각합니다.",
  },
];

const skillTags = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Spring Boot",
  "REST API",
  "Axios",
  "MySQL",
  "OracleDB",
  "GitHub",
];

export default function AboutMeSection() {
  return (
    <Section id="about">
      <Inner>
        <SectionHeader>
          <Eyebrow>About Me</Eyebrow>
          <Title>
            전체 흐름을 이해하며
            <br />
            화면을 구현하는 신입 프론트엔드 개발자입니다
          </Title>
        </SectionHeader>

        <Grid>
          <MainCard>
            <IntroText>
              Java, JavaScript, React, Spring Boot를 학습하며 프론트엔드와
              백엔드를 함께 경험해왔습니다. React로 사용자 화면을 구성하고,
              Spring Boot API와 연동하며 데이터가 화면까지 전달되는 흐름을 직접
              구현해봤습니다.
            </IntroText>

            <IntroText>
              Oracle과 MySQL을 활용한 데이터베이스 설계, SQL/PLSQL 작성 경험을
              바탕으로 단순히 보이는 화면만 만드는 것이 아니라 서비스의 구조와
              데이터 흐름까지 이해하는 개발자로 성장하고자 합니다.
            </IntroText>

            <IntroText>
              프로젝트에서는 컴포넌트 충돌이나 데이터 흐름 문제를 미리
              정리하려고 노력했고, 팀장 경험을 통해 팀원들이 편하게 개발할 수
              있도록 역할을 나누고 흐름을 조율하는 경험도 쌓았습니다.
            </IntroText>

            <TagList aria-label="Skills">
              {skillTags.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </TagList>
          </MainCard>

          <SideCards>
            {aboutCards.map((item) => (
              <FeatureCard key={item.title}>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureText>{item.description}</FeatureText>
              </FeatureCard>
            ))}
          </SideCards>
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.white};
  border-top: 1px solid ${colors.border};
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 32px;

  @media (max-width: 768px) {
    padding: 88px 24px;
  }
`;

const SectionHeader = styled.div`
  max-width: 820px;
  margin-bottom: 56px;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 800;
`;

const Title = styled.h2`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1.18;
  font-weight: 950;
  letter-spacing: -0.055em;
  word-break: keep-all;

  @media (max-width: 640px) {
    letter-spacing: -0.045em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainCard = styled.article`
  padding: 40px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: ${colors.background};

  @media (max-width: 640px) {
    padding: 28px;
  }
`;

const IntroText = styled.p`
  margin: 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.85;
  word-break: keep-all;

  & + & {
    margin-top: 22px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const TagList = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(59, 130, 246, 0.22);
  background: rgba(59, 130, 246, 0.08);
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 800;
`;

const SideCards = styled.div`
  display: grid;
  gap: 16px;
`;

const FeatureCard = styled.article`
  padding: 28px;
  border-radius: 28px;
  border: 1px solid ${colors.border};
  background: rgba(247, 247, 244, 0.55);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(59, 130, 246, 0.35);
  }
`;

const FeatureTitle = styled.h3`
  margin: 0 0 10px;
  color: ${colors.text};
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const FeatureText = styled.p`
  margin: 0;
  color: ${colors.muted};
  font-size: 15px;
  line-height: 1.7;
  word-break: keep-all;
`;
