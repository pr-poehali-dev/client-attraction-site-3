import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Quiz from "@/components/Quiz";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Профи Академия</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#quiz" className="text-foreground hover:text-primary transition-colors">Тест</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Развивайте бизнес с профессиональным обучением
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Курсы, тренинги и обучающие программы для руководителей и специалистов. 
                Повышайте квалификацию команды и достигайте новых высот.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg">
                  <a href="#quiz">Пройти тест</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <a href="#contact">Консультация</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/106767f9-33a7-439d-b6b6-33d262a9456f/files/8bdddff8-d943-4051-a96c-d1c350d6da36.jpg" 
                alt="Профессиональное обучение"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-lg">лет опыта</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">5000+</h3>
              <p className="text-lg">выпускников</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-lg">применяют знания</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Подберём программу за 2 минуты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пройдите короткий тест и узнайте, какой формат обучения подходит именно вам
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите формат обучения, который подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/106767f9-33a7-439d-b6b6-33d262a9456f/files/ef07aaed-f747-4616-885d-bf0db690d2bc.jpg"
                    alt="Бизнес-тренинги"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Icon name="Presentation" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Бизнес-тренинги</CardTitle>
                <CardDescription className="text-base">
                  Интенсивные практические тренинги для развития ключевых навыков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Продажи и переговоры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Управление командой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Личная эффективность</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#contact">Узнать подробнее</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/106767f9-33a7-439d-b6b6-33d262a9456f/files/6b2c6864-9729-4c86-90ec-c5866f6563a2.jpg"
                    alt="Онлайн-курсы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Icon name="Monitor" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Онлайн-курсы</CardTitle>
                <CardDescription className="text-base">
                  Гибкий формат обучения в удобное для вас время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Видеолекции от экспертов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Практические задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Сертификат по окончании</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#contact">Узнать подробнее</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/106767f9-33a7-439d-b6b6-33d262a9456f/files/8bdddff8-d943-4051-a96c-d1c350d6da36.jpg"
                    alt="Корпоративные программы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Icon name="Building2" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Корпоративные программы</CardTitle>
                <CardDescription className="text-base">
                  Индивидуальные решения для развития вашей компании
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Адаптация под ваш бизнес</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Обучение всей команды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Консультации экспертов</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#contact">Узнать подробнее</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="Target" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Практический подход</h3>
                    <p className="text-muted-foreground">Все знания применимы на практике с первого дня</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Users2" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Опытные эксперты</h3>
                    <p className="text-muted-foreground">Преподаватели-практики с реальным опытом</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Lightbulb" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Актуальные программы</h3>
                    <p className="text-muted-foreground">Обновляем материалы в соответствии с трендами</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="HeartHandshake" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Поддержка после обучения</h3>
                    <p className="text-muted-foreground">Консультируем выпускников и помогаем внедрять знания</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Icon name="Quote" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-lg mb-4">
                  "После тренинга по управлению продажами наша команда увеличила конверсию на 40%. 
                  Все инструменты работают и дают результат!"
                </p>
                <p className="font-semibold">Михаил Волков</p>
                <p className="text-sm text-muted-foreground">Директор по продажам, ООО "Технологии"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
            <p className="text-xl text-muted-foreground">
              Мы свяжемся с вами и подберём оптимальную программу обучения
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, какой формат обучения вас интересует..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Профи Академия</h3>
              <p className="text-sm opacity-90">
                Развиваем профессионалов и помогаем компаниям расти
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@profi-academy.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-75 pt-8 border-t border-secondary-foreground/20">
            © 2024 Профи Академия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;