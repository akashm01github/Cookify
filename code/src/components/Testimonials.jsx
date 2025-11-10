import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Home Cook",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "The recipes are so easy to follow! I've tried at least 20 different dishes and every single one turned out amazing. My family loves the weekly meal plans.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Food Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "As someone who's been cooking for years, I'm impressed by the attention to detail in each recipe. The tips and variations have helped me perfect my technique.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Busy Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "This site has been a lifesaver! The quick weeknight recipes are perfect for my hectic schedule, and my kids actually eat the vegetables now. Thank you!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="bg-linear-to-b  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of home cooks who've transformed their kitchen experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <p className="text-sm text-gray-400">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-white"></div>
            </div>
            <span className="font-medium">
              Join 50,000+ happy cooks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}