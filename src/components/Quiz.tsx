import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    icon: string;
    scores: {
      training: number;
      online: number;
      corporate: number;
    };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Какая задача перед вами стоит?",
    answers: [
      {
        text: "Развить личные навыки (продажи, переговоры, лидерство)",
        icon: "User",
        scores: { training: 3, online: 2, corporate: 0 }
      },
      {
        text: "Обучить команду или отдел",
        icon: "Users",
        scores: { training: 1, online: 1, corporate: 3 }
      },
      {
        text: "Освоить новую профессию или навык с нуля",
        icon: "GraduationCap",
        scores: { training: 0, online: 3, corporate: 0 }
      },
      {
        text: "Повысить эффективность всей компании",
        icon: "Building2",
        scores: { training: 0, online: 0, corporate: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "Какой формат обучения вам удобнее?",
    answers: [
      {
        text: "Очные занятия с живым общением",
        icon: "Users2",
        scores: { training: 3, online: 0, corporate: 2 }
      },
      {
        text: "Онлайн в удобное время",
        icon: "Monitor",
        scores: { training: 0, online: 3, corporate: 1 }
      },
      {
        text: "Гибридный формат",
        icon: "Laptop",
        scores: { training: 2, online: 2, corporate: 2 }
      },
      {
        text: "Корпоративный формат на территории компании",
        icon: "MapPin",
        scores: { training: 0, online: 0, corporate: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "Какой бюджет вы готовы выделить?",
    answers: [
      {
        text: "До 30 000 ₽ на человека",
        icon: "Wallet",
        scores: { training: 1, online: 3, corporate: 0 }
      },
      {
        text: "30 000 - 80 000 ₽ на человека",
        icon: "CreditCard",
        scores: { training: 3, online: 2, corporate: 1 }
      },
      {
        text: "80 000 - 200 000 ₽ на человека",
        icon: "Banknote",
        scores: { training: 2, online: 0, corporate: 2 }
      },
      {
        text: "Индивидуальный бюджет для всей компании",
        icon: "Building",
        scores: { training: 0, online: 0, corporate: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Когда вы планируете начать обучение?",
    answers: [
      {
        text: "Как можно скорее",
        icon: "Zap",
        scores: { training: 2, online: 3, corporate: 0 }
      },
      {
        text: "В течение месяца",
        icon: "Calendar",
        scores: { training: 3, online: 2, corporate: 2 }
      },
      {
        text: "Через 1-3 месяца",
        icon: "CalendarDays",
        scores: { training: 2, online: 2, corporate: 3 }
      },
      {
        text: "Планирую на следующий квартал",
        icon: "CalendarRange",
        scores: { training: 1, online: 1, corporate: 2 }
      }
    ]
  }
];

const services = {
  training: {
    title: "Бизнес-тренинги",
    description: "Интенсивные практические тренинги идеально подойдут для быстрого развития конкретных навыков.",
    features: [
      "Живое общение с экспертами",
      "Практические кейсы и упражнения",
      "Networking с участниками",
      "Быстрый результат за 2-3 дня"
    ],
    icon: "Presentation",
    color: "bg-blue-500"
  },
  online: {
    title: "Онлайн-курсы",
    description: "Гибкий формат онлайн-обучения позволит учиться в удобном темпе и получить системные знания.",
    features: [
      "Учитесь в удобное время",
      "Доступ к материалам 24/7",
      "Домашние задания с проверкой",
      "Сертификат по окончании"
    ],
    icon: "Monitor",
    color: "bg-green-500"
  },
  corporate: {
    title: "Корпоративные программы",
    description: "Индивидуальная программа для вашей компании учтет специфику бизнеса и даст максимальный эффект.",
    features: [
      "Программа под ваши задачи",
      "Обучение на вашей территории",
      "Работа с реальными кейсами компании",
      "Долгосрочное сопровождение"
    ],
    icon: "Building2",
    color: "bg-purple-500"
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ training: 0, online: 0, corporate: 0 });
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answerScores: { training: number; online: number; corporate: number }) => {
    const newScores = {
      training: scores.training + answerScores.training,
      online: scores.online + answerScores.online,
      corporate: scores.corporate + answerScores.corporate
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const maxScore = Math.max(scores.training, scores.online, scores.corporate);
    if (scores.training === maxScore) return "training";
    if (scores.online === maxScore) return "online";
    return "corporate";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ training: 0, online: 0, corporate: 0 });
    setShowResult(false);
    setStarted(false);
  };

  const handleContactUs = () => {
    toast({
      title: "Отлично!",
      description: "Прокрутите вниз до формы заявки, чтобы связаться с нами.",
    });
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!started) {
    return (
      <div className="max-w-3xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Lightbulb" size={48} className="text-primary" />
            </div>
            <CardTitle className="text-3xl mb-4">Какая программа вам подойдёт?</CardTitle>
            <CardDescription className="text-lg">
              Ответьте на 4 простых вопроса, и мы подберём оптимальный формат обучения специально для вас
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-muted rounded-lg">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-2" />
                <p className="text-sm">2 минуты</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Icon name="Target" size={32} className="text-primary mx-auto mb-2" />
                <p className="text-sm">Точная рекомендация</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Icon name="Gift" size={32} className="text-primary mx-auto mb-2" />
                <p className="text-sm">Бесплатная консультация</p>
              </div>
            </div>
            <Button size="lg" onClick={() => setStarted(true)} className="text-lg px-8">
              Начать тест
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResult) {
    const recommendation = getRecommendation();
    const service = services[recommendation];

    return (
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>
            <CardTitle className="text-3xl mb-4">Мы подобрали для вас программу!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl mb-6">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                <Icon name={service.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
              
              <div className="space-y-3">
                <p className="font-semibold text-lg mb-3">Что вы получите:</p>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleContactUs} className="flex-1">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={resetQuiz} className="flex-1">
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Пройти заново
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>
            <Button variant="ghost" size="sm" onClick={resetQuiz}>
              <Icon name="X" size={20} />
            </Button>
          </div>
          <Progress value={progress} className="mb-6" />
          <CardTitle className="text-2xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.scores)}
                className="p-6 text-left border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 hover:shadow-md group"
              >
                <Icon 
                  name={answer.icon as any} 
                  size={32} 
                  className="text-primary mb-3 group-hover:scale-110 transition-transform" 
                />
                <p className="font-medium">{answer.text}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
