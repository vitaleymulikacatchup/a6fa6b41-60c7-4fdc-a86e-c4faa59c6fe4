"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ArrowRight, Award, BarChart3, CheckCircle, Linkedin, PenTool, Quote, Search, Settings, Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="GreenScope"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Scale Your Business with Strategic Marketing"
          description="We help ambitious brands grow through data-driven marketing strategies, compelling content, and targeted campaigns that deliver measurable results."
          tag="Marketing Excellence"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "Start Growing",
              href: "contact"
            },
            {
              text: "View Services",
              href: "services"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional marketing team developing growth strategies"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Marketing Services"
          description="Comprehensive marketing solutions designed to accelerate your growth and maximize your ROI"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Digital Strategy",
              description: "Data-driven strategies that align with your business goals and target audience for maximum impact",
              icon: Target
            },
            {
              title: "Social Media Marketing",
              description: "Engaging social media campaigns that build community, increase brand awareness, and drive conversions",
              icon: Users
            },
            {
              title: "Content Creation",
              description: "Compelling content that tells your story, educates your audience, and positions you as an industry leader",
              icon: PenTool
            },
            {
              title: "SEO Optimization",
              description: "Strategic SEO that improves your search rankings and drives qualified organic traffic to your website",
              icon: Search
            },
            {
              title: "Paid Advertising",
              description: "ROI-focused paid campaigns across Google, Facebook, and LinkedIn that generate quality leads",
              icon: Zap
            },
            {
              title: "Brand Development",
              description: "Complete brand strategy and identity development that differentiates you in the marketplace",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose GreenScope"
          description="We're not just another marketing agency. We're your strategic growth partners, committed to delivering exceptional results through innovative approaches and deep industry expertise."
          tag="Our Approach"
          tagIcon={CheckCircle}
          bulletPoints={[
            {
              title: "Data-Driven Results",
              description: "Every strategy is backed by comprehensive analytics and performance metrics to ensure measurable growth",
              icon: BarChart3
            },
            {
              title: "Industry Expertise",
              description: "Our team brings years of experience across diverse industries and marketing channels",
              icon: Users
            },
            {
              title: "Custom Solutions",
              description: "Tailored marketing strategies that align perfectly with your unique business goals and challenges",
              icon: Settings
            },
            {
              title: "Proven Track Record",
              description: "Consistent results for clients across various industries with an average ROI increase of 300%",
              icon: TrendingUp
            }
          ]}
          imageSrc="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Digital marketing strategy and analytics dashboard"
          imagePosition="right"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Passionate marketing professionals dedicated to your success"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Creative Director",
              description: "10+ years crafting compelling brand narratives and leading creative campaigns for Fortune 500 companies",
              imageSrc: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, Creative Director"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Strategist",
              description: "Data analytics expert specializing in performance optimization and ROI-driven marketing strategies",
              imageSrc: "https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, Marketing Strategist"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Digital Specialist",
              description: "Social media and digital marketing expert with expertise in paid advertising and content strategy",
              imageSrc: "https://images.pexels.com/photos/5240020/pexels-photo-5240020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez, Digital Specialist"
            },
            {
              id: "4",
              name: "David Kim",
              role: "SEO Manager",
              description: "Technical SEO specialist focused on organic growth and search engine optimization strategies",
              imageSrc: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim, SEO Manager"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Success Stories"
          description="See how we've helped businesses achieve remarkable growth"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "CEO, TechStart Solutions",
              testimonial: "GreenScope transformed our digital presence completely. Their strategic approach increased our lead generation by 400% in just six months.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Martinez, CEO of TechStart Solutions"
            },
            {
              id: "2",
              name: "Robert Thompson",
              role: "Founder, EcoProducts Inc",
              testimonial: "Working with this team has been game-changing. Their content strategy and social media campaigns doubled our online engagement and sales.",
              imageSrc: "https://images.pexels.com/photos/7414112/pexels-photo-7414112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Thompson, Founder of EcoProducts Inc"
            },
            {
              id: "3",
              name: "Lisa Wang",
              role: "Marketing Director, FinanceFlow",
              testimonial: "The ROI we achieved through their paid advertising campaigns exceeded all expectations. Professional, data-driven, and results-focused.",
              imageSrc: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Wang, Marketing Director at FinanceFlow"
            },
            {
              id: "4",
              name: "James Cooper",
              role: "Owner, LocalBiz Network",
              testimonial: "Their local SEO expertise helped us dominate our market. We went from page 3 to position 1 for all our key terms in four months.",
              imageSrc: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Cooper, Owner of LocalBiz Network"
            },
            {
              id: "5",
              name: "Maria Santos",
              role: "VP Marketing, HealthTech",
              testimonial: "The brand strategy they developed elevated our entire company positioning. Customer perception and loyalty improved dramatically.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Santos, VP Marketing at HealthTech"
            },
            {
              id: "6",
              name: "Thomas Brown",
              role: "CEO, RetailMax",
              testimonial: "Outstanding results across all channels. Their integrated approach to digital marketing delivered consistent growth month over month.",
              imageSrc: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Thomas Brown, CEO of RetailMax"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions About Our Marketing Services"
          sideDescription="Get answers to frequently asked questions about our processes, pricing, and results"
          faqs={[
            {
              id: "1",
              title: "What makes your marketing approach different?",
              content: "We focus on data-driven strategies with measurable ROI. Every campaign is customized to your specific business goals and backed by comprehensive analytics and performance tracking."
            },
            {
              id: "2",
              title: "How long does it take to see results?",
              content: "While some tactics like paid advertising can show immediate results, comprehensive marketing strategies typically show significant improvement within 3-6 months, with continued growth over time."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our strategies are tailored to fit your budget and growth objectives."
            },
            {
              id: "4",
              title: "What's included in your marketing packages?",
              content: "Our packages include strategy development, campaign execution, content creation, performance tracking, and regular reporting. Specific services depend on your chosen package and business needs."
            },
            {
              id: "5",
              title: "How do you measure campaign success?",
              content: "We track KPIs aligned with your business goals: lead generation, conversion rates, ROI, brand awareness, engagement metrics, and revenue growth. You'll receive detailed monthly reports."
            }
          ]}
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Scale Your Business?"
          description="Schedule a free consultation to discuss your marketing goals and discover how we can help you achieve exceptional growth."
          tagIcon={ArrowRight}
          inputPlaceholder="Enter your business email"
          buttonText="Book Consultation"
          termsText="By submitting, you agree to our privacy policy and terms of service. No spam, unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/6476579/pexels-photo-6476579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Marketing consultation and strategy planning session"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="GreenScope"
          copyrightText="© 2025 GreenScope Marketing. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Digital Strategy",
                  href: "services"
                },
                {
                  label: "Social Media",
                  href: "services"
                },
                {
                  label: "Content Creation",
                  href: "services"
                },
                {
                  label: "SEO Optimization",
                  href: "services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Case Studies",
                  href: "testimonials"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "https://blog.example.com"
                },
                {
                  label: "Marketing Guide",
                  href: "https://resources.example.com"
                },
                {
                  label: "Free Tools",
                  href: "https://tools.example.com"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://privacy.example.com"
                },
                {
                  label: "Terms of Service",
                  href: "https://terms.example.com"
                },
                {
                  label: "Cookie Policy",
                  href: "https://cookies.example.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/greenscope",
              ariaLabel: "Follow us on LinkedIn"
            },
            {
              icon: "Twitter",
              href: "https://twitter.com/greenscope",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: "Instagram",
              href: "https://instagram.com/greenscope",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Facebook",
              href: "https://facebook.com/greenscope",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}