import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGithub,
  FiDownload,
  FiArrowUpRight,
  FiSend,
  FiX,
} from "react-icons/fi";

const colors = {
  bg: "#111111",
  panel: "#1A1A1A",
  panelSoft: "rgba(255, 255, 255, 0.06)",
  panelBorder: "rgba(255, 255, 255, 0.12)",
  text: "#F5F5F5",
  muted: "rgba(255, 255, 255, 0.68)",
  subtle: "rgba(255, 255, 255, 0.42)",
  accent: "#3B82F6",
  accentSoft: "rgba(59, 130, 246, 0.18)",
  success: "#22C55E",
  error: "#EF4444",
};

const EMAILJS_SERVICE_ID = "service_m1xev7q";
const EMAILJS_TEMPLATE_ID = "template_v9fgid4";
const EMAILJS_PUBLIC_KEY = "Q9OYA0eRRYLMeTQQI";

const contactLinks = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: "ochant777@gmail.com",
    href: "mailto:ochant777@gmail.com",
  },
  {
    icon: <FiGithub size={22} />,
    label: "GitHub",
    value: "GitHub 바로가기",
    href: "https://github.com/kurecat",
  },
];

export default function ContactSection() {
  const formRef = useRef(null);
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMailModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMailModalOpen]);

  const openMailModal = () => {
    setIsMailModalOpen(true);
    setStatusMessage("");
    setIsError(false);
  };

  const closeMailModal = () => {
    if (isSubmitting) return;
    setIsMailModalOpen(false);
    setStatusMessage("");
    setIsError(false);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage("전송 중입니다...");
    setIsError(false);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsError(false);
          setStatusMessage("성공적으로 전송되었습니다!");

          formRef.current.reset();

          window.setTimeout(() => {
            setIsMailModalOpen(false);
            setStatusMessage("");
          }, 1400);
        },
        () => {
          setIsSubmitting(false);
          setIsError(true);
          setStatusMessage(
            "전송에 실패했습니다. 이메일(ochant777@gmail.com)로 직접 연락 부탁드립니다.",
          );
        },
      );
  };

  return (
    <Section id="contact">
      <Inner>
        <ContactCard>
          <Left>
            <Eyebrow>Contact</Eyebrow>

            <Title>
              함께 성장하며
              <br />
              좋은 서비스를 만들고
              <br />
              싶습니다
            </Title>

            <Description>
              사용자에게 편한 화면을 만들고, 팀에는 함께 일하기 좋은 개발자가
              되고 싶습니다. 포트폴리오를 봐주셔서 감사합니다.
            </Description>

            <ButtonGroup>
              <PrimaryButton type="button" onClick={openMailModal}>
                메일 보내기
                <FiArrowUpRight size={18} />
              </PrimaryButton>

              <SecondaryButton
                href={`${import.meta.env.BASE_URL}docs/resume.pdf`}
                download
              >
                <FiDownload size={18} />
                이력서 다운로드
              </SecondaryButton>
            </ButtonGroup>
          </Left>

          <Right>
            {contactLinks.map((item) => (
              <ContactLink
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <LinkIconBox>{item.icon}</LinkIconBox>

                <LinkContent>
                  <LinkLabel>{item.label}</LinkLabel>
                  <LinkValue>{item.value}</LinkValue>
                </LinkContent>

                <LinkArrow>
                  <FiArrowUpRight size={16} />
                </LinkArrow>
              </ContactLink>
            ))}
          </Right>
        </ContactCard>

        <FooterText>
          © {new Date().getFullYear()} Jeong Donggyun. Built with React Vite.
        </FooterText>
      </Inner>

      {isMailModalOpen && (
        <ModalOverlay onClick={closeMailModal}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <CloseButton
              type="button"
              onClick={closeMailModal}
              disabled={isSubmitting}
              aria-label="메일 폼 닫기"
            >
              <FiX size={22} />
            </CloseButton>

            <ModalEyebrow>Send Message</ModalEyebrow>
            <ModalTitle>메시지를 남겨주세요</ModalTitle>
            <ModalDescription>
              이름, 회신 이메일, 메시지를 입력하시면 바로 전송됩니다.
            </ModalDescription>

            <StyledForm ref={formRef} onSubmit={sendEmail}>
              <InputGroup>
                <Label htmlFor="user_name">Name</Label>
                <Input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="성함 / 회사명"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="user_email">Email</Label>
                <Input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="회신받으실 이메일 주소"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="메시지 내용을 입력해 주세요."
                  required
                />
              </InputGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "메시지 보내기"}
                <FiSend size={18} />
              </SubmitButton>
            </StyledForm>

            {statusMessage && (
              <StatusMessage $isError={isError}>{statusMessage}</StatusMessage>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.bg};
  padding: 120px 0 40px;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const ContactCard = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 48px;
  padding: 44px;
  border-radius: 36px;
  border: 1px solid ${colors.panelBorder};
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(59, 130, 246, 0.14) 100%
    ),
    ${colors.panel};
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding: 32px;
  }

  @media (max-width: 640px) {
    padding: 24px;
    border-radius: 28px;
  }
`;

const Left = styled.div`
  position: relative;
  z-index: 1;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: #93c5fd;
  font-size: 16px;
  font-weight: 800;
`;

const Title = styled.h2`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(40px, 5vw, 72px);
  line-height: 0.98;
  font-weight: 950;
  letter-spacing: -0.065em;
  word-break: keep-all;
`;

const Description = styled.p`
  max-width: 560px;
  margin: 28px 0 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.a`
  min-height: 52px;
  padding: 0 20px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  font-size: 15px;
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

const PrimaryButton = styled(BaseButton).attrs({ as: "button" })`
  border: 0;
  background: ${colors.accent};
  color: white;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 16px 34px rgba(59, 130, 246, 0.35);

  &:hover {
    background: #2563eb;
  }
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.text};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

const Right = styled.div`
  display: grid;
  gap: 14px;
  align-content: center;
`;

const ContactLink = styled.a`
  display: grid;
  grid-template-columns: 58px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border-radius: 22px;
  border: 1px solid ${colors.panelBorder};
  background: rgba(255, 255, 255, 0.04);
  color: ${colors.text};
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(147, 197, 253, 0.26);
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 520px) {
    grid-template-columns: 54px 1fr;
  }
`;

const LinkIconBox = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: ${colors.accentSoft};
  color: #93c5fd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkContent = styled.div`
  min-width: 0;
`;

const LinkLabel = styled.p`
  margin: 0;
  color: ${colors.subtle};
  font-size: 13px;
  font-weight: 800;
`;

const LinkValue = styled.p`
  margin: 6px 0 0;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 850;
  overflow-wrap: anywhere;
`;

const LinkArrow = styled.span`
  color: ${colors.subtle};
  display: inline-flex;

  @media (max-width: 520px) {
    display: none;
  }
`;

const FooterText = styled.p`
  margin: 28px 0 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
  font-weight: 650;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  padding: 24px;
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: min(560px, 100%);
  padding: 34px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #171717;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);

  @media (max-width: 640px) {
    padding: 24px 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ModalEyebrow = styled.p`
  margin: 0 0 12px;
  color: #93c5fd;
  font-size: 14px;
  font-weight: 900;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.15;
  font-weight: 950;
  letter-spacing: -0.055em;
`;

const ModalDescription = styled.p`
  margin: 14px 0 0;
  color: ${colors.muted};
  font-size: 15px;
  line-height: 1.7;
`;

const StyledForm = styled.form`
  margin-top: 28px;
  display: grid;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  color: ${colors.text};
  font-size: 13px;
  font-weight: 850;
`;

const Input = styled.input`
  width: 100%;
  min-height: 52px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: ${colors.text};
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.34);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: ${colors.text};
  font-size: 15px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.34);
  }
`;

const SubmitButton = styled.button`
  min-height: 54px;
  margin-top: 4px;
  border: 0;
  border-radius: 14px;
  background: ${colors.accent};
  color: white;
  font-size: 15px;
  font-weight: 900;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  margin: 14px 0 0;
  color: ${({ $isError }) => ($isError ? colors.error : colors.success)};
  font-size: 14px;
  font-weight: 800;
  line-height: 1.6;
`;
