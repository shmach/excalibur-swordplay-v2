'use client';

import { Ban, Coins, Flag, } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { JSX, useEffect, useState } from "react";
import { Button } from "./Button";
import { Progress } from "./Progress";

type IRule = {
  id: string;
  icon: JSX.Element,
  title: string;
  imageUrl: string;
  imageAlt: string;
  ruleDescription: string;
}

export function Rules({ duration }: { duration: number }) {
  const rules: IRule[] = [
    {
      id: 'rule-1',
      icon: <Flag />,
      title: 'Como funciona uma partida?',
      imageUrl: 'https://utfs.io/f/6d86eeb0-5206-4eba-a7b1-79f5396d17b4-g43cy8.jpg',
      imageAlt: 'Arte de dois cavaleiros se encarando antes do combate',
      ruleDescription: 'A partida será definida em uma melhor de 5, o jogador que fizer 3 pontos primeiro vence!',
    },
    {
      id: 'rule-2',
      icon: <Coins />,
      title: 'Como funciona a pontuação?',
      imageUrl: 'https://utfs.io/f/3a297e3a-8290-4891-9580-e3437358f4ac-g43cy9.jpg',
      imageAlt: 'Arte de dois cavaleiros batalhando',
      ruleDescription: 'Para fazer 1 ponto, é muito simples, você deve encostar a sua arma no adversário, porém evitar áreas proibidas.',
    },
    {
      id: 'rule-3',
      icon: <Ban />,
      title: 'Movimentos Proibidos!',
      imageUrl: 'https://utfs.io/f/d0d708cf-8cec-4218-bb7e-6970469d2ac1-g43cya.jpg',
      imageAlt: 'Arte de um cavaleiro sendo julgado por seus crimes',
      ruleDescription: 'Acertar mãos, pés e a cabeça inválida o ponto e o round irá recomeçar, também é proibido arremessar a arma e empurrar o adversário.',
    },
  ]

  const [activeRule, setActiveRule] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(0);

    const progressTimer = setInterval(() => {
      setTimer(prevState => {
        if (prevState >= 101) {
          clearInterval(progressTimer);

          setActiveRule(prevState => (prevState + 1) % 3);
          return 0;
        }
        return prevState + 100 / (duration * 50);
      });
    }, 20);
    return () => clearInterval(progressTimer)
  }, [activeRule])

  const changeActiveRuleAction = (ruleId: number) => {
    setActiveRule(ruleId);
    setTimer(0);
  }

  return (
    <div className="w-full h-[430px] flex justify-between gap-10 items-center">
      <div className="hidden md:block">
        <img src={rules[activeRule].imageUrl} className="w-[480px] h-full rounded-lg shadow-sm" alt={rules[activeRule].imageAlt} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-7">

        <div className="w-full flex flex-col py-3 gap-3">
          <Button variant='outline' className="w-full border-none hover:bg-transparent shadow-none" type="button" onClick={() => changeActiveRuleAction(0)}>
            <h4 className="w-full flex justify-start items-start text-xl">
              <span className="mr-2">{rules[0].icon}</span>
              {rules[0].title}
            </h4>
          </Button>
          <Progress className="h-1" value={activeRule === 0 ? timer : 0} />
          <AnimatePresence>
            {
              activeRule === 0 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'fit-content'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  transition={{ ease: 'easeInOut' }}
                  className="w-full text-justify text-lg text-gray-600 indent-6"
                >
                  {rules[0].ruleDescription}
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col py-3 gap-3">
          <Button variant='outline' className="w-full border-none hover:bg-transparent shadow-none" type="button" onClick={() => changeActiveRuleAction(1)}>
            <h4 className="w-full flex justify-start items-start text-xl">
              <span className="mr-2">{rules[1].icon}</span>
              {rules[1].title}
            </h4>
          </Button>
          <Progress className="h-1" value={activeRule === 1 ? timer : 0} />
          <AnimatePresence>
            {
              activeRule === 1 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'fit-content'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  transition={{ ease: 'easeInOut' }}
                  className="w-full text-justify text-lg text-gray-600 indent-6"
                >
                  {rules[1].ruleDescription}
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col py-3 gap-3">
          <Button variant='outline' className="w-full border-none hover:bg-transparent shadow-none" type="button" onClick={() => changeActiveRuleAction(2)}>
            <h4 className="w-full flex justify-start items-start text-xl">
              <span className="mr-2">{rules[2].icon}</span>
              {rules[2].title}
            </h4>
          </Button>
          <Progress className="h-1" value={activeRule === 2 ? timer : 0} />
          <AnimatePresence>
            {
              activeRule === 2 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'fit-content'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  transition={{ ease: 'easeInOut' }}
                  className="w-full text-justify text-lg text-gray-600 indent-6"
                >
                  {rules[2].ruleDescription}
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
