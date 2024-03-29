import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: feedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      <header>
          <span className="text-xl leading-6">Deixe o seu feedback</span>
          <CloseButton />
        </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-20 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => props.onFeedbackTypeChanged(key as feedbackType)}
                type="button"
              >
                <img src={value.image.source} alt={value.title} />
              </button>
            );
          })
        }
      </div>
    </>
  )
}