import React from "react";
import styled from "styled-components";
import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiBriefcase,
  FiLayout,
  FiCode,
  FiDatabase,
} from "react-icons/fi";

import { colors } from "../Styles/theme";

const heroMetaItems = [
  { icon: "mapPin", label: "Based in Cheonan" },
  { icon: "briefcase", label: "Junior Frontend Developer" },
  { icon: "status", label: "Open to Frontend Roles" },
];

export default function HeroSection() {
  return (
    <Section id="home">
      <BlueGlow aria-hidden="true" />
      <DotPattern aria-hidden="true">
        {Array.from({ length: 25 }).map((_, index) => (
          <Dot key={index} />
        ))}
      </DotPattern>

      <Inner>
        <Content>
          <Eyebrow>Junior Frontend Developer</Eyebrow>

          <Headline>
            사용자 경험을
            <br />
            안정적인 코드로 구현하는
            <br />
            신입 프론트엔드 개발자 정동균입니다
          </Headline>

          <Description>
            React를 활용해 사용자 화면을 구현하고, Spring Boot API와 연동하며
            서비스의 전체 흐름을 이해해왔습니다. 사용하기 쉬운 화면과 유지보수
            가능한 컴포넌트 구조를 고민하는 프론트엔드 개발자로 성장하고자
            합니다.
          </Description>

          <ButtonGroup>
            <PrimaryButton href="#work">
              프로젝트 보러가기
              <FiArrowRight size={20} />
            </PrimaryButton>

            <SecondaryButton href="/resume.pdf">
              <FiDownload size={20} />
              이력서 다운로드
            </SecondaryButton>
          </ButtonGroup>

          <MetaList>
            {heroMetaItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <MetaItem icon={item.icon} label={item.label} />
                {index < heroMetaItems.length - 1 && <MetaDivider />}
              </React.Fragment>
            ))}
          </MetaList>
        </Content>

        <FocusCard />
      </Inner>

      <ScrollHint aria-hidden="true" />
    </Section>
  );
}

function MetaItem({ icon, label }) {
  const iconMap = {
    mapPin: <FiMapPin size={20} />,
    briefcase: <FiBriefcase size={20} />,
    status: <StatusDot />,
  };

  return (
    <MetaItemWrap>
      <MetaIcon>{iconMap[icon]}</MetaIcon>
      <span>{label}</span>
    </MetaItemWrap>
  );
}

function FocusCard() {
  const focusItems = [
    {
      icon: "layout",
      title: "UI 구현",
      description:
        "React 기반으로 반응형 화면과 재사용 가능한 컴포넌트를 구현합니다.",
    },
    {
      icon: "code",
      title: "API 연동",
      description:
        "Spring Boot API와 Axios를 활용해 데이터를 화면에 연결한 경험이 있습니다.",
    },
    {
      icon: "database",
      title: "전체 흐름 이해",
      description:
        "Oracle, MySQL, SQL 경험을 바탕으로 데이터 흐름까지 함께 이해하려고 합니다.",
    },
  ];

  const metrics = [
    { value: "6+", label: "개인·팀 프로젝트" },
    { value: "React", label: "주요 프론트엔드" },
    { value: "API", label: "연동 경험" },
  ];

  return (
    <Card>
      <CardInfo>
        <ProfileHeader>
          <div>
            <CardLabel>What I Focus On</CardLabel>
            <Name>
              화면을 만들고
              <br />
              흐름을 연결합니다
            </Name>
          </div>
          <StatusBadge>Junior Portfolio</StatusBadge>
        </ProfileHeader>

        <CardDivider />

        <IntroText>
          단순히 동작하는 화면보다 사용자가 편하게 이용할 수 있는 UI, 읽기 쉬운
          코드, 프론트엔드와 백엔드가 자연스럽게 연결되는 구조를 중요하게
          생각합니다.
        </IntroText>

        <FocusList>
          {focusItems.map((item) => (
            <FocusItem key={item.title}>
              <FocusIcon>{renderFocusIcon(item.icon)}</FocusIcon>
              <div>
                <FocusTitle>{item.title}</FocusTitle>
                <FocusDescription>{item.description}</FocusDescription>
              </div>
            </FocusItem>
          ))}
        </FocusList>
      </CardInfo>

      <MetricGrid aria-label="Portfolio summary">
        {metrics.map((item) => (
          <Metric key={item.label} value={item.value} label={item.label} />
        ))}
      </MetricGrid>
    </Card>
  );
}

function Metric({ value, label }) {
  return (
    <MetricItem>
      <MetricValue>{value}</MetricValue>
      <MetricLabel>{label}</MetricLabel>
    </MetricItem>
  );
}

function renderFocusIcon(icon) {
  const iconMap = {
    layout: <FiLayout size={24} />,
    code: <FiCode size={24} />,
    database: <FiDatabase size={24} />,
  };

  return iconMap[icon] ?? null;
}

function StatusDot() {
  return <DotIcon aria-hidden="true" />;
}

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: ${colors.background};
`;

const Inner = styled.div`
  max-width: 1280px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 72px 24px 96px;
  }
`;

const Content = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.p`
  margin: 0 0 24px;
  color: ${colors.accent};
  font-size: 18px;
  font-weight: 700;
`;

const Headline = styled.h1`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(48px, 6vw, 76px);
  line-height: 1.15;
  font-weight: 950;
  letter-spacing: -0.055em;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 42px;
    letter-spacing: -0.045em;
  }
`;

const Description = styled.p`
  max-width: 680px;
  margin: 32px 0 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.75;
  word-break: keep-all;
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.a`
  min-height: 56px;
  padding: 0 28px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: ${colors.accent};
  color: ${colors.white};
  box-shadow: 0 18px 32px rgba(59, 130, 246, 0.22);

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: #2563eb;

    svg {
      transform: translateX(4px);
    }
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.62);
  color: ${colors.text};
  border: 1px solid rgba(31, 31, 31, 0.15);

  &:hover {
    color: ${colors.accent};
    border-color: rgba(59, 130, 246, 0.4);
  }
`;

const MetaList = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: rgba(31, 31, 31, 0.8);
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`;

const MetaItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MetaIcon = styled.span`
  color: ${colors.accent};
  display: inline-flex;
`;

const MetaDivider = styled.span`
  width: 1px;
  height: 24px;
  background: rgba(31, 31, 31, 0.15);

  @media (max-width: 640px) {
    display: none;
  }
`;

const Card = styled.aside`
  position: relative;
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 28px 70px rgba(31, 31, 31, 0.1);
  backdrop-filter: blur(16px);
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const CardLabel = styled.p`
  margin: 0 0 12px;
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const StatusBadge = styled.span`
  flex: 0 0 auto;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  font-size: 13px;
  font-weight: 800;
`;

const IntroText = styled.p`
  margin: 0 0 28px;
  color: ${colors.muted};
  font-size: 16px;
  line-height: 1.75;
  word-break: keep-all;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 950;
  letter-spacing: -0.05em;
  word-break: keep-all;
`;

const CardDivider = styled.div`
  height: 1px;
  margin: 28px 0;
  background: ${colors.border};
`;

const FocusList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FocusItem = styled.div`
  display: flex;
  gap: 16px;
`;

const FocusIcon = styled.div`
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FocusTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 800;
`;

const FocusDescription = styled.p`
  margin: 6px 0 0;
  color: ${colors.muted};
  font-size: 14px;
  line-height: 1.6;
  word-break: keep-all;
`;

const MetricGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${colors.border};
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.75);
  overflow: hidden;
`;

const MetricItem = styled.div`
  padding: 20px 8px;
  text-align: center;

  & + & {
    border-left: 1px solid ${colors.border};
  }
`;

const MetricValue = styled.div`
  color: ${colors.accent};
  font-size: 28px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.05em;
`;

const MetricLabel = styled.div`
  margin-top: 10px;
  color: ${colors.muted};
  font-size: 12px;
  font-weight: 600;
`;

const DotIcon = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: ${colors.accent};
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
`;

const BlueGlow = styled.div`
  pointer-events: none;
  position: absolute;
  right: -160px;
  bottom: 0;
  width: 384px;
  height: 384px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  filter: blur(48px);
`;

const DotPattern = styled.div`
  pointer-events: none;
  position: absolute;
  right: 48px;
  top: 50%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  opacity: 0.3;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: ${colors.accent};
`;

const ScrollHint = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  width: 32px;
  height: 32px;
  transform: translateX(-50%) rotate(45deg);
  border-right: 2px solid rgba(107, 107, 107, 0.4);
  border-bottom: 2px solid rgba(107, 107, 107, 0.4);

  @media (max-width: 1024px) {
    display: none;
  }
`;
