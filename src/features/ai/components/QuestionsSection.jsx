import AccordionItem from './AccordionItem';

const QuestionsSection = ({ activeSection, technicalQuestions, behavioralQuestions }) => {
    const questions = activeSection === 'technical' ? technicalQuestions : behavioralQuestions;
    const questionType = activeSection === 'technical' ? 'technical' : 'behavioral';

    return (
        <div>
            {questions?.map((item, idx) => (
                <AccordionItem
                    key={`${questionType}-${idx}`}
                    index={idx}
                    question={item.question}
                    intention={item.intention}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};

export default QuestionsSection;
