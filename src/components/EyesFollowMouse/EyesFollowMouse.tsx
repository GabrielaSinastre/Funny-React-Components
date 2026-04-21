import React, { useRef } from "react";
import { Container, Face, Eyes, Eye } from "./styles";

export const EyesFollowMouse = () => {
  const eyesRef = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (event: React.MouseEvent) => {
    eyesRef.current.forEach((eye) => {
      if (!eye) return;

      const rect = eye.getBoundingClientRect(); // retorna a posição e o tamanho desse elemento na tela:  top: number, left: number, right: number, bottom: number, width: number, height: number
      const x = rect.left + rect.width / 2; // quero saber onde fica o centro do olho
      const y = rect.top + rect.height / 2; // se não souber onde está o olho não tem como calcular pra onde ele deve olhar

      const radian = Math.atan2(event.pageX - x, event.pageY - y); //Descobre pra que lado o mouse está e gira o olho nessa direção
      const rot = (radian * (180 / Math.PI) * -1) + 270;

      eye.style.transform = `rotate(${rot}deg)`;
    });
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <Face>
        <Eyes>
          <Eye ref={(el) => el && (eyesRef.current[0] = el)} />
          <Eye ref={(el) => el && (eyesRef.current[1] = el)} />
        </Eyes>
      </Face>
    </Container>
  );
};