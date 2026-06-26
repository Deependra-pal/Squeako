import React from 'react';
import BlogCard from '../shared/BlogCard';

export default function BlogGrid() {
  const blogs = [
    {
      imgTitle: 'Switching from Slack: a 1-day plan',
      category: 'Migration',
      title: 'How to move your team off Slack in a day',
      description: 'A simple checklist to bring your channels, people and history across without the chaos.',
      readTime: '6 min read',
      type: 'Guide',
    },
    {
      imgTitle: 'The real cost of your tool stack',
      imgBg: 'linear-gradient(135deg, #16D196, #0F9E73)',
      category: 'Cost',
      title: "What your team's tools actually cost per year",
      description: 'Add up chat, video, calling and tasks — then see what one app would save you.',
      readTime: '4 min read',
      type: 'Playbook',
    },
    {
      imgTitle: 'Data residency & the DPDP Act',
      imgBg: 'linear-gradient(135deg, #1A1230, #B8441A)',
      category: 'Security',
      title: 'What the DPDP Act means for your team chat',
      description: 'A plain-language look at where your data should live, and why it matters.',
      readTime: '5 min read',
      type: 'Explainer',
    },
    {
      imgTitle: 'Running better standups',
      imgBg: 'linear-gradient(135deg, #F5B544, #E07A2E)',
      category: 'Productivity',
      title: "How to run a standup people don't dread",
      description: 'Recurring meetings, async updates and a few simple rules that keep them short.',
      readTime: '5 min read',
      type: 'Guide',
    },
    {
      imgTitle: 'Working with clients in chat',
      imgBg: 'linear-gradient(135deg, #F0506E, #D23A57)',
      category: 'Use case',
      title: 'Set up client rooms without oversharing',
      description: 'How guest access lets clients see exactly what you want — and nothing else.',
      readTime: '4 min read',
      type: 'How-to',
    },
    {
      imgTitle: 'Remote teams across India',
      imgBg: 'linear-gradient(135deg, #E8571F, #4F8BFF)',
      category: 'Remote work',
      title: 'Keeping a distributed Indian team in sync',
      description: 'Presence, async habits and timezones — small habits that make a big difference.',
      readTime: '6 min read',
      type: 'Playbook',
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-white border border-hairline rounded-rbox p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog, idx) => (
              <BlogCard
                key={idx}
                imgTitle={blog.imgTitle}
                imgBg={blog.imgBg}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                readTime={blog.readTime}
                type={blog.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
