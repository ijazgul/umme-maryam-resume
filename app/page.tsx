import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Globe, Mail, Phone, MapPin, GraduationCap, Award, Clock } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900"><a href="/">Umme Maryam</a></div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">
                Experience
              </a>
              <a href="#education" className="text-slate-600 hover:text-slate-900 transition-colors">
                Education
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                Available for Teaching
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Islamic Studies & <span className="text-emerald-600">Quran Teacher</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Dedicated educator with expertise in Quran, Hadith, Fiqh, and Islamic history. Committed to nurturing
                Islamic values, moral character, and academic excellence through engaging teaching methods.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6" />
                    <span className="font-semibold">Quran with Tajweed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6" />
                    <span className="font-semibold">Online Teaching Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    <span className="font-semibold">4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate Islamic educator dedicated to spreading knowledge and nurturing faith
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nurturing Islamic Values Through Education</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With a strong foundation in Islamic studies and years of teaching experience, I am committed to
                providing quality Islamic education to students of all ages. My approach combines traditional Islamic
                teaching methods with modern educational techniques to create an engaging learning environment.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Teaching Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Quran with Tajweed</Badge>
                    <Badge variant="secondary">Islamic Studies</Badge>
                    <Badge variant="secondary">Arabic Language</Badge>
                    <Badge variant="secondary">Urdu</Badge>
                    <Badge variant="secondary">English</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Lesson Planning</Badge>
                    <Badge variant="secondary">Student Management</Badge>
                    <Badge variant="secondary">Online Teaching</Badge>
                    <Badge variant="secondary">MS Office</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Teaching Philosophy</h4>
                  <p className="text-slate-600">
                    "Education is the foundation of faith. Through patient guidance and meaningful engagement, I strive
                    to help students develop both Islamic knowledge and strong moral character."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Teaching Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Years of dedicated service in Islamic education across different institutions
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-emerald-700">Online Islamic Education Teacher</CardTitle>
                    <CardDescription className="text-lg">
                      International Students (Dubai & USA) • 2020 - Present
                    </CardDescription>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Providing high-quality online lessons in Islamic education</li>
                  <li>• Teaching Quran with proper rules and Tajweed</li>
                  <li>• Engaging students from diverse cultural backgrounds</li>
                  <li>• Utilizing modern technology for effective online learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Islamic Studies Teacher</CardTitle>
                    <CardDescription className="text-lg">
                      Madarsa Tarteel ul Quran & Schooling System • 2015 - 2016
                    </CardDescription>
                  </div>
                  <Clock className="h-5 w-5 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Taught Urdu and Islamiyat for Class II & III</li>
                  <li>• Provided basic Arabic language instruction</li>
                  <li>• Taught English for Class I & II</li>
                  <li>• Engaged students with interesting educational activities</li>
                  <li>• Focused on Quran and Arabic language development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Islamic Studies Instructor</CardTitle>
                    <CardDescription className="text-lg">Bilal Academy • 2010 - 2012</CardDescription>
                  </div>
                  <Clock className="h-5 w-5 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Delivered comprehensive Islamic studies curriculum</li>
                  <li>• Mentored students in Islamic values and principles</li>
                  <li>• Developed engaging lesson plans for different age groups</li>
                  <li>• Maintained strong communication with parents and administration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strong academic foundation in Islamic studies and Arabic language
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Masters in Arabic</CardTitle>
                <CardDescription>Federal Urdu University • 2013-2014</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Advanced degree in Arabic language and literature, providing deep understanding of classical and
                  modern Arabic texts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Aalimah Degree</CardTitle>
                <CardDescription>Wifaq ul Madaris Board • 2005-2009</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Comprehensive Islamic studies degree covering Quran, Hadith, Fiqh, Arabic grammar, and Islamic
                  jurisprudence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Matriculation</CardTitle>
                <CardDescription>Computer Science • 2011-2012</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Secondary education with focus on computer science, providing technical skills for modern teaching
                  methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to begin your Islamic education journey? Contact me to schedule lessons or discuss your learning
              goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I offer both in-person and online lessons for students of all ages. Whether you're looking to learn
                Quran with proper Tajweed, improve your Arabic, or deepen your Islamic knowledge, I'm here to help guide
                your learning journey.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-300">03218954363</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">ummemaryam2013@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-slate-300">R 229 Block A, Naya Nazimabad, Karachi</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Schedule a Lesson</CardTitle>
                <CardDescription className="text-slate-300">
                  Send me a message to discuss your learning goals and schedule your first lesson.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Age Group</label>
                    <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>Child (5-12)</option>
                      <option>Teen (13-17)</option>
                      <option>Adult (18+)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Contact</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Phone or email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Learning Goals</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="What would you like to learn? (Quran, Arabic, Islamic Studies, etc.)"
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">Umme Maryam</div>
            <p className="text-center md:text-right">
              © 2024 Umme Maryam. Dedicated to Islamic education and nurturing faith through knowledge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
