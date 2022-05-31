import React from 'react';
import './blog3.css';
import blog03 from '../../assets/blog03.png'

export default function Blog3() {
    return (
      <div className="blog3">
        <div className="blog3Wrapper">
          <img
            className="blog3Img"
            src={blog03}
            alt=""
          />
          <h1 className="blog3Title">
          Data is the strongest currency in marketing and there may be too much of it
            <div className="blog3Edit">
              <i className="blog3Icon far fa-edit"></i>
              <i className="blog3Icon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="blog3Info">
            <span>
              Author: DataDecisionMakers
              <b className="blog3Author">
              </b>
            </span>
            <span>58 days ago</span>
          </div>
          <p className="blog3Desc">
          Data and information obtained through its analysis have been used in marketing decision-making for years. It wasn’t until the first years of this millennium that talk began about “big data.” Especially over the last 10 years, the amount and importance of data in marketing have grown exponentially. Ironically, the adjective “big” is completely undersized in this context.            <br />
            <br />
            <br />
            According to many estimates, more than 90% of all data globally has been generated in just the last few years. It’s estimated that by 2025 people will produce 463 billion gigabytes of data every day. According to statistics, as early as 2021, 4.66 billion people used the internet — about 60% of the population — and the number is growing by hundreds of millions every year. With the massive increase in usage and digitalization, Cybercrime Magazine has estimated that in 2025, cloud services will have more than 200 zettabytes of data — 1 zettabyte = 44 trillion gigabytes.
            <br />
            <br />
            Where is most of it coming from?
            <br />
            <br />
            As early as the beginning of this millennium, marketing data was used primarily to track sales transactions and analyze the impact of email campaigns. Today, human-derived data for marketing is generated from a vastly larger number of sources: online shopping, clicks, search behavior, social media activity, geographic movement and so on. Brands want to meet consumers more effectively in the digital world, which is happening. For example, according to statistics from Business of Apps, nearly 70% of Instagram users viewed images and videos posted by brands in 2021.
            <br />
            <br />
            At the same time, as the amount of data increases, its collection has become increasingly challenging with various consumer protection regulations (e.g., GDPR and ePrivacy) and changes in services. E.g., changes in how Apple and Facebook allow their app users to decide on their data are very welcome to consumers, but they decrease the possibilities for apps to gather data and make it harder for service providers to provide customized services. Apple’s decision to deprecate the use of their unique IDFA (identifier for advertisers) files in the same category. These changes have fundamentally affected marketing strategies and cause new challenges for marketers. 
            <br />
            <br />
            The quantitative infinity of data and its inevitable growth are major problems for today’s marketers. No team has any physical ability to process such an amount of data, let alone the ability to produce genuinely useful analyses for it. Fortunately, the data-driven world seems to recognize and solve its own challenges, as many new intelligent products and services for analyzing data have emerged to support marketers worldwide to truly leverage the ever-growing amount of information. This development is still in its infancy, and this can be witnessed, e.g., in my own company, Supermetrics’ new clients: 80% of them have never used this kind of service before.
            <br />
            <br />
            Marketing and the need for data rules
            <br />
            <br />
            Legislators and decision-makers worldwide have also been active in regulating data although it’s almost impossible to keep pace with change in many places. The genuine exploitation of data requires rules and regulations, as growth always increases the potential for misuse. The task of technology companies is to build data pipelines that ensure the trust and security of AI and analytics.
            <br />
            <br />
            Data is the new currency for businesses, and the overwhelming growth rate of it can be intimidating. The key challenge is to harness data in a way that benefits both marketers and consumers who produce it. And in doing this, manage the “big data” in an ethically correct and consumer-friendly way. Luckily, there are many great services for analyzing data, effective regulation to protect consumers’ rights and a never-ending supply of information at our hands to make better products and services. The key for businesses is to embrace these technologies so that they can avoid sinking in their own data.
            <br />
            <br />
            </p>
        </div>
      </div>
    );
  }
  