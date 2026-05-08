import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FiArrowUpRight,
  FiCpu,
  FiMonitor,
  FiDatabase,
  FiActivity,
  FiFileText,
  FiPlayCircle,
  FiX,
} from "react-icons/fi";

const colors = {
  background: "#F7F7F4",
  text: "#1F1F1F",
  muted: "#6B6B6B",
  accent: "#3B82F6",
  white: "#FFFFFF",
  border: "rgba(31, 31, 31, 0.1)",
};

const projects = [
  {
    type: "Main Project / AI Smart Farm",
    title: "컴퓨터 비전 기반 스마트팜 이상 징후 자율 대응 자동화 시스템",
    period: "2026.03.31 - 2026.04.27",
    teamSize: "7명",
    icon: <FiCpu size={28} />,
    description:
      "작물 생육 상태를 이미지 기반으로 분석하고 이상 징후를 탐지해 자동 대응까지 수행하는 AI 스마트팜 시스템입니다.",
    role: [
      "React 기반 실시간 모니터링 대시보드 구현",
      "FastAPI 기반 AI 추론 API와 프론트엔드 연동",
      "MongoDB 및 Oracle 데이터 흐름을 고려한 화면 구성",
      "Python 시뮬레이터 기반 이미지 데이터 처리 흐름 이해",
    ],
    learned:
      "AI 모델의 예측 결과를 사용자가 이해할 수 있는 모니터링 화면으로 연결하며, 데이터 시각화와 상태 표현의 중요성을 경험했습니다.",
    stack: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "MongoDB",
      "Oracle",
      "PyTorch",
    ],
    link: "https://github.com/orgs/Team-2-Final/repositories",
    presentationUrl: `${import.meta.env.BASE_URL}docs/SeedFarm.pdf`,
    videoUrl: `${import.meta.env.BASE_URL}videos/SeedFarm.mp4`,
  },
  {
    type: "Mini Project / Predictive Maintenance",
    title: "사전감지 고장예측 프로그램",
    period: "2026.03.12 - 2026.03.30",
    teamSize: "6명",
    icon: <FiActivity size={28} />,
    description:
      "진동 센서 데이터를 기반으로 모터 고장 확률을 예측하고 다중 설비 상태를 통합 모니터링하는 AI 예지보전 시스템입니다.",
    role: [
      "Frontend Development 및 PM 역할 수행",
      "React 기반 다중 설비 모니터링 대시보드 개발",
      "CSV 업로드 분석 및 데이터 로그 조회 화면 구현",
      "FastAPI와 연동해 예측 결과를 화면에 시각화",
    ],
    learned:
      "예측 모델의 결과를 단순 수치로 보여주는 것이 아니라, 위험 장비와 고장 확률을 사용자가 빠르게 판단할 수 있도록 표현하는 방법을 고민했습니다.",
    stack: ["React", "Axios", "FastAPI", "MongoDB"],
    link: "https://github.com/kurecat/bearing-predictive-maintenance-project",
    presentationUrl: `${import.meta.env.BASE_URL}docs/AIM.pdf`,
    videoUrl: "",
  },
  {
    type: "Main Project / MES",
    title: "반도체 패키징 공정 MES",
    period: "2026.01.15 - 2026.02.10",
    teamSize: "5명",
    icon: <FiMonitor size={28} />,
    description:
      "반도체 패키징 공정의 데이터 추적과 생산 관리를 돕는 지능형 MES-WEB 통합 서비스입니다.",
    role: [
      "프론트엔드 메인 개발자로 React 기반 UI 구현",
      "재사용 가능한 UI 컴포넌트 설계",
      "Spring Boot, JPA 기반 백엔드 API와 연동",
      "생산 관리 데이터 조회 및 화면 렌더링 흐름 구현",
    ],
    learned:
      "공정 데이터가 화면, API, 데이터베이스를 거쳐 서비스로 연결되는 전체 흐름을 경험했고, 대용량 데이터 화면 구성에서 컴포넌트 구조와 렌더링 흐름의 중요성을 배웠습니다.",
    stack: [
      "React",
      "Axios",
      "Java",
      "C#",
      "Spring Boot",
      "JPA",
      "JWT",
      "MySQL",
    ],
    link: "https://github.com/kurecat/mes_final_project_total",
    presentationUrl: `${import.meta.env.BASE_URL}docs/MES.pdf`,
    videoUrl: `${import.meta.env.BASE_URL}videos/MES.mp4`,
  },
  {
    type: "Main Project / Subscription Service",
    title: "가전제품 구독 서비스",
    period: "2025.12.10 - 2025.12.26",
    teamSize: "4명",
    icon: <FiDatabase size={28} />,
    description:
      "사용자 맞춤형 가전제품 대여, 구독 내역 관리, 결제 흐름을 지원하는 웹 플랫폼입니다.",
    role: [
      "React 기반 사용자 대시보드 UI 구성",
      "구독 상품 탐색 및 관리 화면 구현",
      "Spring Security, JWT 인증 흐름 프론트엔드 처리",
      "Spring Boot API와 Axios를 활용한 데이터 연동",
    ],
    learned:
      "로그인, 인증, 구독 관리처럼 사용자의 흐름이 중요한 서비스에서 화면 상태와 API 응답을 자연스럽게 연결하는 경험을 쌓았습니다.",
    stack: [
      "React",
      "Axios",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
    ],
    link: "https://github.com/qdpnok/nurim",
    presentationUrl: `${import.meta.env.BASE_URL}docs/NURIM.pdf`,
    videoUrl: "",
  },
];

export default function ProjectsSection() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  const openModal = (project, type) => {
    setModal({ project, type });
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <Section id="work">
      <Inner>
        <SectionHeader>
          <Eyebrow>Selected Projects</Eyebrow>
          <Title>
            프론트엔드 구현을 중심으로
            <br />
            프로젝트 경험을 정리했습니다
          </Title>
          <Description>
            React 기반 UI 구현, API 연동, 데이터 흐름 이해를 중심으로 참여한
            프로젝트입니다. 각 프로젝트에서 맡은 역할과 구현 과정, 배운 점을
            함께 정리했습니다.
          </Description>
        </SectionHeader>

        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={project.title}>
              <ProjectVisual>
                <ProjectNumber>
                  {String(index + 1).padStart(2, "0")}
                </ProjectNumber>

                <VisualBottom>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                  <VisualInfo>
                    <VisualLabel>Team</VisualLabel>
                    <VisualValue>{project.teamSize}</VisualValue>
                  </VisualInfo>
                </VisualBottom>
                <VisualPattern aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, dotIndex) => (
                    <PatternDot key={dotIndex} />
                  ))}
                </VisualPattern>
              </ProjectVisual>

              <ProjectContent>
                <ProjectMeta>
                  <ProjectType>{project.type}</ProjectType>
                  <ProjectPeriod>{project.period}</ProjectPeriod>
                </ProjectMeta>

                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <DetailGrid>
                  <DetailBlock>
                    <DetailTitle>My Role</DetailTitle>
                    <RoleList>
                      {project.role.map((role) => (
                        <RoleItem key={role}>{role}</RoleItem>
                      ))}
                    </RoleList>
                  </DetailBlock>

                  <DetailBlock>
                    <DetailTitle>What I Learned</DetailTitle>
                    <LearnedText>{project.learned}</LearnedText>
                  </DetailBlock>
                </DetailGrid>

                <StackList>
                  {project.stack.map((stack) => (
                    <StackTag key={stack}>{stack}</StackTag>
                  ))}
                </StackList>

                <ActionGroup>
                  <ProjectLink
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub 보기`}
                  >
                    GitHub 보기
                    <FiArrowUpRight size={18} />
                  </ProjectLink>

                  {project.presentationUrl && (
                    <ProjectButton
                      type="button"
                      onClick={() => openModal(project, "presentation")}
                    >
                      발표자료 보기
                      <FiFileText size={18} />
                    </ProjectButton>
                  )}

                  {project.videoUrl && (
                    <ProjectButton
                      type="button"
                      onClick={() => openModal(project, "video")}
                    >
                      시연 영상 보기
                      <FiPlayCircle size={18} />
                    </ProjectButton>
                  )}
                </ActionGroup>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectList>
      </Inner>

      {modal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <CloseButton
              type="button"
              onClick={closeModal}
              aria-label="모달 닫기"
            >
              <FiX size={26} />
            </CloseButton>

            <ModalHeader>
              <ModalLabel>
                {modal.type === "presentation" ? "Presentation" : "Demo Video"}
              </ModalLabel>
              <ModalTitle>{modal.project.title}</ModalTitle>
            </ModalHeader>

            {modal.type === "presentation" && (
              <>
                <PdfBox>
                  <iframe
                    src={`${modal.project.presentationUrl}#view=FitH`}
                    title={`${modal.project.title} 발표자료`}
                  />
                </PdfBox>

                <MobilePdfFallback
                  href={modal.project.presentationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  모바일에서 발표자료 열기
                  <FiArrowUpRight size={18} />
                </MobilePdfFallback>
              </>
            )}

            {modal.type === "video" && (
              <VideoBox>
                <video
                  src={modal.project.videoUrl}
                  controls
                  autoPlay
                  muted
                  playsInline
                >
                  해당 브라우저는 영상을 지원하지 않습니다.
                </video>
              </VideoBox>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
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

const ProjectList = styled.div`
  display: grid;
  gap: 28px;
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 0;
  overflow: hidden;
  border-radius: 34px;
  border: 1px solid ${colors.border};
  background: ${colors.background};
  box-shadow: 0 24px 70px rgba(31, 31, 31, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.32);
    box-shadow: 0 34px 90px rgba(31, 31, 31, 0.09);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectVisual = styled.div`
  position: relative;
  min-height: 100%;
  padding: 32px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.16),
    rgba(255, 255, 255, 0.7)
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    min-height: 260px;
  }
`;

const ProjectNumber = styled.span`
  position: relative;
  z-index: 1;
  color: rgba(31, 31, 31, 0.18);
  font-size: 76px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.08em;
`;

const VisualBottom = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  gap: 14px;
`;

const ProjectIcon = styled.div`
  position: relative;
  z-index: 2;
  width: 58px;
  height: 58px;
  border-radius: 20px;
  background: ${colors.white};
  color: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 36px rgba(31, 31, 31, 0.08);
`;

const VisualInfo = styled.div`
  position: relative;
  z-index: 1;
  width: fit-content;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${colors.border};
`;

const VisualLabel = styled.p`
  margin: 0;
  color: ${colors.muted};
  font-size: 12px;
  font-weight: 800;
`;

const VisualValue = styled.p`
  margin: 5px 0 0;
  color: ${colors.text};
  font-size: 18px;
  font-weight: 950;
`;

const VisualPattern = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  opacity: 0.22;
  z-index: 1;
`;

const PatternDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: ${colors.accent};
`;

const ProjectContent = styled.div`
  padding: 44px;

  @media (max-width: 640px) {
    padding: 30px 24px;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

const ProjectType = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  font-size: 13px;
  font-weight: 800;
`;

const ProjectPeriod = styled.span`
  color: ${colors.muted};
  font-size: 14px;
  font-weight: 700;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(28px, 3.2vw, 40px);
  line-height: 1.2;
  font-weight: 950;
  letter-spacing: -0.055em;
  word-break: keep-all;
`;

const ProjectDescription = styled.p`
  max-width: 760px;
  margin: 18px 0 0;
  color: ${colors.muted};
  font-size: 17px;
  line-height: 1.75;
  word-break: keep-all;
`;

const DetailGrid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DetailBlock = styled.div`
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.62);
`;

const DetailTitle = styled.h4`
  margin: 0 0 14px;
  color: ${colors.text};
  font-size: 15px;
  font-weight: 900;
`;

const RoleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
`;

const RoleItem = styled.li`
  position: relative;
  padding-left: 16px;
  color: ${colors.muted};
  font-size: 14px;
  line-height: 1.6;
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

const LearnedText = styled.p`
  margin: 0;
  color: ${colors.muted};
  font-size: 14px;
  line-height: 1.75;
  word-break: keep-all;
`;

const StackList = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StackTag = styled.span`
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.1);
  background: rgba(255, 255, 255, 0.75);
  color: ${colors.text};
  font-size: 13px;
  font-weight: 800;
`;

const ActionGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ActionBase = styled.a`
  min-height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectLink = styled(ActionBase)`
  background: ${colors.accent};
  color: ${colors.white};
  border: 1px solid transparent;

  &:hover {
    background: #2563eb;
  }
`;

const ProjectButton = styled(ActionBase).attrs({ as: "button" })`
  border: 1px solid rgba(31, 31, 31, 0.12);
  background: rgba(255, 255, 255, 0.72);
  color: ${colors.text};
  font-family: inherit;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
    border-color: rgba(59, 130, 246, 0.34);
    background: ${colors.white};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  padding: 24px;
  background: rgba(15, 17, 21, 0.72);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: min(960px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 42px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: ${colors.white};
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.24);

  @media (max-width: 640px) {
    padding: 30px 22px;
    border-radius: 26px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;
  width: 42px;
  height: 42px;
  border: 1px solid ${colors.border};
  border-radius: 999px;
  background: ${colors.background};
  color: ${colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${colors.accent};
  }
`;

const ModalHeader = styled.div`
  padding-right: 56px;
  margin-bottom: 28px;
`;

const ModalLabel = styled.p`
  margin: 0 0 12px;
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 900;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
  font-weight: 950;
  letter-spacing: -0.055em;
  word-break: keep-all;
`;

const PdfBox = styled.div`
  width: 100%;
  height: 640px;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid ${colors.border};
  background: ${colors.background};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    background: ${colors.white};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const VideoBox = styled.div`
  overflow: hidden;
  border-radius: 22px;
  background: #000;

  video {
    display: block;
    width: 100%;
    max-height: 640px;
    object-fit: contain;
  }
`;

const MobilePdfFallback = styled.a`
  display: none;
  width: fit-content;
  min-height: 48px;
  margin-top: 16px;
  padding: 0 18px;
  border-radius: 14px;
  background: ${colors.accent};
  color: ${colors.white};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 900;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;
