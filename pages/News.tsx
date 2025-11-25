import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { PageContainer } from '../components/PageContainer';

const News: React.FC = () => {
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setCardsVisible(true), 100);
  }, []);

  return (
    <PageContainer className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar 
        title="Noticias" 
        rightAction={<button className="p-2"><span className="material-symbols-outlined">search</span></button>}
      />
      
      <main className="flex-1 space-y-4 p-4">
        <NewsCard 
          source="Tech Today" 
          time="2 hours ago"
          title="AMD Announces New Zen 5 CPUs"
          desc="A brief summary of the article's content, discussing the latest architecture."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmZ3zxSmek8tJMTSmxFX7iI_mAkMw1zaKcHb2YQ4V0zGRHgbrejW0V5KYPXEh7Sqkicnx13n8rB0g8BfkyvqsBeRP4pMJdpT0uqtpuC4gLj8kv9k2Zocoqk8DcVX9msb5CdPm0La7_SpTE9xOgxTXKosmpHrn_toeSImdLPuCIFvcKrF0j2-FcVY7T6ao1yGtK2AxaXP_kSs9FAY7v-N0WPg77DRIwOm3oqSvU7a1qja9fSYLWqQ0L0IwFIXq5Bfa-qcKMXh9YYQ"
          visible={cardsVisible}
          index={0}
        />
        <NewsCard 
          source="PC Builder Weekly" 
          time="1 day ago"
          title="Nvidia's RTX 5090: Leaks and Rumors"
          desc="Exploring the potential specifications and release date for the next gen."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBQXCNzjIk-LnPpvV3ppcbukZwL-qPtHvaqYWvcH_tQgW76i80_mmZgod2THnvb4uz-TwV6LJJKH2-Tu5KZcjLpXxGZaL27v9Sa3rmSWoJ8hIjnpVRXH5IxX7HtQi09OotnfM3CljYfWJixwnYDJHXNfXVtneckFlcIdt6khAZl6aD8HjCu3ArY0POsGqjMO_s_BbC6MptF-R9kbm-2FqD9lq-4gh9uJoCWEHne-kKo0hqBaopYaJM2GLYIchJgAUgSvTml0_Iasqc"
          visible={cardsVisible}
          index={1}
        />
        <NewsCard 
          source="Hardware Hub" 
          time="2 days ago"
          title="Guide: Choosing the Right Motherboard"
          desc="Our comprehensive guide helps you select the perfect motherboard."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAbLUlKFJi25O3uRG3Ki5wl4FNed8UAsaeC_atR6Ysq1FYLDxbqoQy9WGql7-82LM0kS5vE1lcAGUpOddyGF1TEafSNOKHxgluDbopBel0Otv0ssf4JedIrIdzSK2w-QcM-Lo5OjMM2iSgeoeFBIricpFm44HMoq63vsPc5_cRWdAvNzzxotyO1Rab_GSuaTZgRNBSAEqj2NqyXj12TNPvPliFB9izMgn9Z8LioPHt8ewgjGtZbIzQDQ_rwz_hNIpnITVHEf89uykc"
          visible={cardsVisible}
          index={2}
        />
      </main>
    </PageContainer>
  );
};

const NewsCard: React.FC<{ source: string, time: string, title: string, desc: string, img: string, visible: boolean, index: number }> = ({ source, time, title, desc, img, visible, index }) => (
  <div className="flex cursor-pointer gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow" style={{
    animation: visible ? `slideInUp 0.5s ease-out ${index * 0.15}s backwards` : 'none'
  }}>
    <div className="flex flex-[2] flex-col gap-1">
      <p className="text-xs font-medium text-gray-500">{source} • {time}</p>
      <p className="text-base font-bold leading-tight text-primary">{title}</p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{desc}</p>
    </div>
    <div className="flex-1">
      <div className="aspect-square w-full rounded-lg bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
    </div>
  </div>
);

export default News;