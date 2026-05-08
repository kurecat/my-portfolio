import styled from "styled-components";
import {
  FiBookOpen,
  FiCpu,
  FiDatabase,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import { colors } from "../Styles/theme";

const experiences = [
  {
    period: "2026.02 - 2026.04",
    title: "AI 기반 빅데이터 분석 및 예측·자동화 서비스 구축",
    organization: "휴먼교육센터",
    icon: <FiCpu size={26} />,
    summary:
      "데이터 수집, 처리, AI 모델링, 시각화, 자동화 서비스 구축 흐름을 학습했습니다.",
    points: [
      "TensorFlow 기반 머신러닝/딥러닝 모델 학습 경험",
      "스마트팜 이상 징후 자율 대응 자동화 시스템 프로젝트 수행",
      "React와 Spring Boot를 연동한 모니터링 및 제어 화면 구현",
      "Docker, Kubernetes 등 클라우드·인프라 기본 개념 학습",
    ],
    tags: ["AI", "TensorFlow", "React", "Spring Boot", "Docker", "Kubernetes"],
  },
  {
    period: "2025.08 - 2026.02",
    title: "JAVA 활용 스마트 팩토리 MES 웹솔루션",
    organization: "휴먼교육센터",
    icon: <FiDatabase size={26} />,
    summary:
      "MES 도메인을 기반으로 데이터베이스 설계부터 웹 서버 구현, 화면 구성까지 전체 흐름을 경험했습니다.",
    points: [
      "Oracle DB 기반 테이블 설계, SQL/PLSQL 작성",
      "Java와 Spring Boot 기반 웹 서버 및 REST API 구현 경험",
      "React 기반 컴포넌트 UI 구현 및 비동기 데이터 연동",
      "생산 관리, 자재 관리, 공정 관리 등 MES 기본 흐름 이해",
    ],
    tags: ["Java", "React", "Spring Boot", "OracleDB", "PL/SQL", "MES"],
  },
  {
    period: "2023.04 - 2025.01",
    title: "공군 병장 만기전역",
    organization: "Military Service",
    icon: <FiShield size={26} />,
    summary:
      "규칙적인 생활과 책임감을 바탕으로 맡은 일을 끝까지 수행하는 태도를 길렀습니다.",
    points: [
      "시간 약속과 맡은 역할을 지키는 책임감 강화",
      "조직 안에서 협업하고 소통하는 경험 축적",
      "정해진 절차와 기준을 지키며 업무를 수행하는 습관 형성",
    ],
    tags: ["Responsibility", "Teamwork", "Discipline"],
  },
  {
    period: "2019.03 - 2023.02",
    title: "스마트미디어 전공심화 졸업",
    organization: "백석문화대학교",
    icon: <FiBookOpen size={26} />,
    summary:
      "스마트미디어 전공을 통해 웹, 미디어, 소프트웨어 개발의 기초를 학습했습니다.",
    points: [
      "스마트미디어 전공심화 과정 졸업",
      "프로그래밍과 웹 기반 서비스 구현에 대한 기본기 학습",
      "팀 프로젝트와 발표를 통한 협업 경험 축적",
    ],
    tags: ["Smart Media", "Web", "Team Project"],
  },
];

const collaborationHighlights = [
  {
    icon: <FiUsers size={22} />,
    title: "팀장 경험",
    text: "교육 과정 팀 프로젝트에서 역할을 나누고 전체 흐름을 관리하며 팀원들이 편하게 개발할 수 있도록 조율했습니다.",
  },
  {
    icon: <FiDatabase size={22} />,
    title: "전체 흐름 이해",
    text: "프론트엔드와 백엔드를 함께 다루며 화면, API, 데이터베이스가 연결되는 구조를 경험했습니다.",
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Inner>
        <SectionHeader>
          <Eyebrow>Experience & Education</Eyebrow>
          <Title>
            교육과 프로젝트를 통해
            <br />
            서비스 전체 흐름을 경험했습니다
          </Title>
          <Description>
            신입 개발자로서 실무 경력은 아직 많지 않지만, 교육 과정과 팀
            프로젝트를 통해 프론트엔드, 백엔드, 데이터베이스가 연결되는 흐름을
            꾸준히 경험해왔습니다.
          </Description>
        </SectionHeader>

        <ContentGrid>
          <Timeline>
            {experiences.map((item) => (
              <TimelineItem key={`${item.period}-${item.title}`}>
                <TimelineIcon>{item.icon}</TimelineIcon>
                <TimelineCard>
                  <MetaRow>
                    <Period>{item.period}</Period>
                    <Organization>{item.organization}</Organization>
                  </MetaRow>

                  <ItemTitle>{item.title}</ItemTitle>
                  <Summary>{item.summary}</Summary>

                  <PointList>
                    {item.points.map((point) => (
                      <PointItem key={point}>{point}</PointItem>
                    ))}
                  </PointList>

                  <TagList>
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagList>
                </TimelineCard>
              </TimelineItem>
            ))}
          </Timeline>

          <SidePanel>
            <PanelTitle>Working Style</PanelTitle>
            <PanelText>
              꼼꼼하게 구조를 먼저 정리하고, 문제가 생길 수 있는 부분을 미리
              생각하는 편입니다. 다만 일정 안에서 완성도를 맞추기 위해
              우선순위를 정하며 개선해가고 있습니다.
            </PanelText>

            <HighlightList>
              {collaborationHighlights.map((item) => (
                <HighlightCard key={item.title}>
                  <HighlightIcon>{item.icon}</HighlightIcon>
                  <div>
                    <HighlightTitle>{item.title}</HighlightTitle>
                    <HighlightText>{item.text}</HighlightText>
                  </div>
                </HighlightCard>
              ))}
            </HighlightList>
          </SidePanel>
        </ContentGrid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.background};
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
  max-width: 900px;
  margin-bottom: 64px;
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

const Description = styled.p`
  max-width: 760px;
  margin: 28px 0 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 24px;

  &::before {
    content: "";
    position: absolute;
    left: 31px;
    top: 32px;
    bottom: 32px;
    width: 1px;
    background: rgba(31, 31, 31, 0.12);
  }

  @media (max-width: 640px) {
    &::before {
      display: none;
    }
  }
`;

const TimelineItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const TimelineIcon = styled.div`
  position: relative;
  z-index: 1;
  width: 64px;
  height: 64px;
  border-radius: 22px;
  background: ${colors.accent};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 34px rgba(59, 130, 246, 0.22);
`;

const TimelineCard = styled.div`
  padding: 32px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 22px 60px rgba(31, 31, 31, 0.05);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.34);
    box-shadow: 0 30px 80px rgba(31, 31, 31, 0.08);
  }

  @media (max-width: 640px) {
    padding: 26px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const Period = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  font-size: 13px;
  font-weight: 850;
`;

const Organization = styled.span`
  color: ${colors.muted};
  font-size: 14px;
  font-weight: 750;
`;

const ItemTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.25;
  font-weight: 950;
  letter-spacing: -0.05em;
  word-break: keep-all;
`;

const Summary = styled.p`
  margin: 16px 0 0;
  color: ${colors.muted};
  font-size: 16px;
  line-height: 1.75;
  word-break: keep-all;
`;

const PointList = styled.ul`
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
`;

const PointItem = styled.li`
  position: relative;
  padding-left: 18px;
  color: ${colors.muted};
  font-size: 14px;
  line-height: 1.65;
  word-break: keep-all;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: ${colors.accent};
  }
`;

const TagList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.1);
  background: rgba(247, 247, 244, 0.72);
  color: ${colors.text};
  font-size: 13px;
  font-weight: 800;
`;

const SidePanel = styled.aside`
  position: sticky;
  top: 104px;
  padding: 32px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: ${colors.white};
  box-shadow: 0 22px 60px rgba(31, 31, 31, 0.05);

  @media (max-width: 1080px) {
    position: static;
  }

  @media (max-width: 640px) {
    padding: 26px;
  }
`;

const PanelTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: 28px;
  font-weight: 950;
  letter-spacing: -0.05em;
`;

const PanelText = styled.p`
  margin: 18px 0 0;
  color: ${colors.muted};
  font-size: 15px;
  line-height: 1.75;
  word-break: keep-all;
`;

const HighlightList = styled.div`
  margin-top: 28px;
  display: grid;
  gap: 14px;
`;

const HighlightCard = styled.div`
  display: flex;
  gap: 14px;
  padding: 18px;
  border-radius: 22px;
  background: ${colors.background};
  border: 1px solid ${colors.border};
`;

const HighlightIcon = styled.div`
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HighlightTitle = styled.h4`
  margin: 0;
  color: ${colors.text};
  font-size: 15px;
  font-weight: 900;
`;

const HighlightText = styled.p`
  margin: 8px 0 0;
  color: ${colors.muted};
  font-size: 13px;
  line-height: 1.65;
  word-break: keep-all;
`;
