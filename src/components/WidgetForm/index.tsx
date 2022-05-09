import { CloseButton } from "../CloseButton";
import bugImgUrl from '../../imgs/bugEmoji.png';
import ideaImgUrl from '../../imgs/lampadaEmoji.png';
import thoughtImgUrl from '../../imgs/pensamentoEmoji.png';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImgUrl,
      alt: ''
    }
  }
}

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null> (null);
  const [feedbackSent, setfeedbackSent] = useState(false);
  
  function handleRestartFeedback() {
    setfeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-full">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
          <FeedbackContentStep 
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={ ()=> setfeedbackSent(true) }
          />
          )
        }
        </>
      )}
      
      <footer>
        Feito Com Amor ♥ by Ana Gabriela
      </footer>  
    </div>
  );
}