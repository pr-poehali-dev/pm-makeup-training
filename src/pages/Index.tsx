import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courses = [
    {
      title: 'Базовый курс',
      duration: '5 дней',
      price: '45 000 ₽',
      description: 'Идеально для начинающих мастеров. Изучите основы перманентного макияжа бровей.',
      features: ['Теория и практика', 'Сертификат', 'Поддержка 3 месяца']
    },
    {
      title: 'Профессиональный курс',
      duration: '10 дней',
      price: '85 000 ₽',
      description: 'Полный курс по всем зонам: брови, губы, веки. Для тех, кто хочет стать экспертом.',
      features: ['Все техники', 'Практика на моделях', 'Поддержка 6 месяцев', 'Помощь в трудоустройстве']
    },
    {
      title: 'Мастер-класс по губам',
      duration: '2 дня',
      price: '25 000 ₽',
      description: 'Углубленное изучение техники перманентного макияжа губ.',
      features: ['Акварельная техника', 'Контур и заполнение', 'Работа с пигментами']
    }
  ];

  const portfolioItems = [
    { id: 1, category: 'brows', title: 'Пудровые брови', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/b57669f7-0c73-4f01-829d-2da2cdc5e904.jpg' },
    { id: 2, category: 'lips', title: 'Акварельные губы', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/7cea9f62-eb25-4634-b0be-3578912f9ea9.jpg' },
    { id: 3, category: 'eyes', title: 'Межресничка', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/5c61552e-6a13-44ab-8154-ac3ff5ef3b69.jpg' },
    { id: 4, category: 'brows', title: 'Волосковая техника', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/b57669f7-0c73-4f01-829d-2da2cdc5e904.jpg' },
    { id: 5, category: 'lips', title: 'Контур губ', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/7cea9f62-eb25-4634-b0be-3578912f9ea9.jpg' },
    { id: 6, category: 'brows', title: 'Омбре брови', image: 'https://cdn.poehali.dev/projects/73c1c56f-68e4-44ec-a590-2ca3e33bcc63/files/b57669f7-0c73-4f01-829d-2da2cdc5e904.jpg' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Выпускница базового курса',
      text: 'Это была лучшая инвестиция в мою карьеру! Преподаватели невероятно профессиональны, а атмосфера на курсе была очень поддерживающей.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      role: 'Выпускница профессионального курса',
      text: 'После окончания курса я сразу начала принимать клиентов. Полученные знания и практика дали мне уверенность в своих силах.',
      rating: 5
    },
    {
      name: 'Елена Васильева',
      role: 'Мастер-класс по губам',
      text: 'Отличный мастер-класс! Узнала множество тонкостей работы с губами, которые не найдешь в интернете.',
      rating: 5
    }
  ];

  const instructors = [
    {
      name: 'Екатерина Смирнова',
      title: 'Главный преподаватель',
      experience: '12 лет опыта',
      specialty: 'Эксперт по бровям'
    },
    {
      name: 'Ольга Морозова',
      title: 'Преподаватель',
      experience: '8 лет опыта',
      specialty: 'Специалист по губам'
    }
  ];

  const filteredPortfolio = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-serif font-bold text-primary">Академия Перманента</div>
            <div className="hidden md:flex gap-8">
              <a href="#courses" className="text-sm hover:text-primary transition-colors">Курсы</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#instructors" className="text-sm hover:text-primary transition-colors">Преподаватели</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-primary hover:bg-primary/90">Записаться</Button>
              <button
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#courses" className="text-sm hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Курсы</a>
                <a href="#portfolio" className="text-sm hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Портфолио</a>
                <a href="#testimonials" className="text-sm hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Отзывы</a>
                <a href="#instructors" className="text-sm hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Преподаватели</a>
                <a href="#contact" className="text-sm hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
                <Button className="bg-primary hover:bg-primary/90 w-full" onClick={() => setIsMobileMenuOpen(false)}>Записаться</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Искусство перманентного макияжа
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Станьте мастером премиум-класса. Обучение у лучших специалистов индустрии.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Выбрать курс
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Наши курсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу обучения, которая соответствует вашим целям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-2">{course.title}</h3>
                  <div className="flex gap-4 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {course.duration}
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground">{course.price}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">Записаться на курс</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground mb-8">Примеры работ наших мастеров и выпускников</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('all')}
                className={selectedFilter === 'all' ? 'bg-primary' : ''}
              >
                Все работы
              </Button>
              <Button 
                variant={selectedFilter === 'brows' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('brows')}
                className={selectedFilter === 'brows' ? 'bg-primary' : ''}
              >
                Брови
              </Button>
              <Button 
                variant={selectedFilter === 'lips' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('lips')}
                className={selectedFilter === 'lips' ? 'bg-primary' : ''}
              >
                Губы
              </Button>
              <Button 
                variant={selectedFilter === 'eyes' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('eyes')}
                className={selectedFilter === 'eyes' ? 'bg-primary' : ''}
              >
                Веки
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-serif text-xl p-4">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Наши преподаватели</h2>
            <p className="text-lg text-muted-foreground">Учитесь у лучших специалистов индустрии</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-1">{instructor.title}</p>
                  <p className="text-muted-foreground mb-2">{instructor.experience}</p>
                  <Badge variant="secondary">{instructor.specialty}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Отзывы выпускников</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши студенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Записаться на обучение</h2>
            <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами для консультации</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Анна" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 999-99-99" className="border-2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="anna@example.com" className="border-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующий курс</label>
                  <Input placeholder="Например: Базовый курс" className="border-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ваш вопрос или комментарий</label>
                  <Textarea placeholder="Расскажите, что вас интересует..." rows={4} className="border-2" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground">info@academy.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Академия Перманента</h3>
              <p className="text-sm text-background/80">Ваш путь к успеху в индустрии красоты</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Базовый курс</li>
                <li>Профессиональный</li>
                <li>Мастер-классы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@academy.ru</li>
                <li>Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            © 2024 Академия Перманента. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;