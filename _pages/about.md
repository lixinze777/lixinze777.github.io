---
permalink: /
title: ""
excerpt: "Xinze Li — Ph.D. student at NTU researching LLM/VLM agents, episodic memory, RAG, and long-context reasoning."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a fourth-year Ph.D. student in College of Computing and Data Science (CCDS) at Nanyang Technological University (NTU). I am co-advised by Prof. [Aixin Sun](https://personal.ntu.edu.sg/axsun/) and Prof. [Yixin Cao](https://sites.google.com/view/yixin-homepage). Before that, I received my Bachelor of Computing Degree (with Honours) from National University of Singapore (NUS) in 2021, and worked as a project officer in S-lab, NTU until 2023.

My research focuses on how LLM/VLM agents use experience and external knowledge: **episodic memory**, **retrieval-augmented generation (RAG)**, and **long-context reasoning**. My work has appeared at ACL, EMNLP, and NeurIPS, with <a href='https://scholar.google.com/citations?user=XdNw0cwAAAAJ'><strong><span id='total_cit'>800+</span></strong> Google Scholar citations</a>.

<aside class="job-market" aria-label="Job market and CV">
  <p><strong>On the 2027 job market.</strong> I am open to research scientist and applied scientist opportunities in LLM/VLM agents, memory, and RAG.</p>
  <div class="profile-actions">
    <a class="profile-action profile-action--primary" href="/files/Xinze_Li_CV_EN.pdf" download>CV · English <span class="file-format">PDF</span></a>
    <a class="profile-action" href="/files/Xinze_Li_CV_CN.pdf" download lang="zh">简历 · 中文 <span class="file-format">PDF</span></a>
    <a class="profile-action profile-action--contact" href="mailto:xinze002@e.ntu.edu.sg">Get in touch <span aria-hidden="true">↗</span></a>
  </div>
</aside>


# 🔥 News
- *2026.08*: &nbsp;🎉🎉 Two papers accepted to EMNLP 2026 (Findings)!
- *2025.07*: &nbsp;🎉🎉 Gave tutorial in SIGIR 2025 in Padova/Italy!
- *2024.09*: &nbsp;🎉🎉 One paper accepted to NeurIPS 2024 as spotlight!
- *2024.05*: &nbsp;🎉🎉 Two papers accepted to ACL 2024 (Findings)!
- *2023.05*: &nbsp;🎉🎉 One paper accepted to ACL 2023 (Findings)!

# 🔎 Selected Research

{% include research-highlights.html %}


# 📝 Publications
- [Skill-as-Pseudocode: Refactoring Skill Libraries to Pseudocode for LLM Agents](https://arxiv.org/abs/2605.27955), **Xinze Li**, Yuhang Zang, Yixin Cao, Aixin Sun. <span class="venue-tag">EMNLP 2026 · Findings</span><br><span class="resource-links">[Paper](https://arxiv.org/abs/2605.27955) · [Code](https://github.com/InternLM/Skill-as-Pseudocode)</span>
- [EMemBench: Interactive Benchmarking of Episodic Memory for VLM Agents](https://arxiv.org/abs/2601.16690), **Xinze Li**, Ziyue Zhu, Siyuan Liu, Yubo Ma, Yuhang Zang, Yixin Cao, Aixin Sun. <span class="venue-tag">EMNLP 2026 · Findings</span><br><span class="resource-links">[Paper](https://arxiv.org/abs/2601.16690) · [Code](https://github.com/InternLM/EMemBench)</span>
- [MMLongBench-Doc: Benchmarking Long-context Document Understanding with Visualizations](https://arxiv.org/abs/2407.01523), Yubo Ma, Yuhang Zang, Liangyu Chen, Meiqi Chen, Yizhu Jiao, **Xinze Li**, Xinyuan Lu, Ziyu Liu, Yan Ma, Xiaoyi Dong, Pan Zhang, Liangming Pan, Yu-Gang Jiang, Jiaqi Wang, Yixin Cao, Aixin Sun. <span class="venue-tag venue-tag--spotlight">NeurIPS 2024 · Spotlight</span> (Datasets and Benchmarks Track)<br><span class="resource-links">[Paper](https://arxiv.org/abs/2407.01523) · [Code](https://github.com/mayubo2333/MMLongBench-Doc) · [Project Page](https://mayubo2333.github.io/MMLongBench-Doc/) · [Dataset](https://huggingface.co/datasets/yubo2333/MMLongBench-Doc)</span>
- [Towards Verifiable Generation: A Benchmark for Knowledge-aware Language Model Attribution](https://aclanthology.org/2024.findings-acl.28/), **Xinze Li**, Yixin Cao, Liangming Pan, Yubo Ma, Aixin Sun. <span class="venue-tag">ACL 2024 · Findings</span><br><span class="resource-links">[Paper](https://aclanthology.org/2024.findings-acl.28/) · [Code](https://github.com/lixinze777/Knowledge-aware-Language-Model-Attribution)</span>
- [Data Augmentation using LLMs: Data Perspectives, Learning Paradigms and Challenges](https://aclanthology.org/2024.findings-acl.97/), Bosheng Ding, Chengwei Qin, Ruochen Zhao, Tianze Luo, **Xinze Li**, Guizhen Chen, Wenhan Xia, Junjie Hu, Anh Tuan Luu, Shafiq Joty. <span class="venue-tag">ACL 2024 · Findings</span><br><span class="resource-links">[Paper](https://aclanthology.org/2024.findings-acl.97/)</span>
- [Take a Break in the Middle: Investigating Subgoals towards Hierarchical Script Generation](https://aclanthology.org/2023.findings-acl.644/), **Xinze Li**, Yixin Cao, Muhao Chen, Aixin Sun. <span class="venue-tag">ACL 2023 · Findings</span><br><span class="resource-links">[Paper](https://aclanthology.org/2023.findings-acl.644/) · [Code](https://github.com/lixinze777/Hierarchical-Script-Generation)</span>
- [MMEKG: Multi-modal Event Knowledge Graph towards Universal Representation across Modalities](https://aclanthology.org/2022.acl-demo.23/), Yubo Ma, Zehao Wang, Mukai Li, Yixin Cao, Meiqi Chen, **Xinze Li**, Wenqi Sun, Kunquan Deng, Kun Wang, Aixin Sun, Jing Shao. <span class="venue-tag">ACL 2022 · Demo</span><br><span class="resource-links">[Paper](https://aclanthology.org/2022.acl-demo.23/)</span>


# 📒 Preprints
- [What Do LLM Agents Know About Their World? Task2Quiz: A Paradigm for Studying Environment Understanding](https://arxiv.org/abs/2601.09503), Siyuan Liu, Hongbang Yuan, **Xinze Li**, Ziyue Zhu, Yixin Cao, Yu-Gang Jiang. 2026.<br><span class="resource-links">[Paper](https://arxiv.org/abs/2601.09503)</span>
- [Toward Generalizable Evaluation in the LLM Era: A Survey Beyond Benchmarks](https://arxiv.org/abs/2504.18838), Yixin Cao, Shibo Hong, **Xinze Li**, Jiahao Ying, Yubo Ma, Haiyuan Liang, Yantao Liu, Zijun Yao, Xiaozhi Wang, Dan Huang, Wenxuan Zhang, Lifu Huang, Muhao Chen, Lei Hou, Qianru Sun, Xingjun Ma, Zuxuan Wu, Min-Yen Kan, David Lo, Qi Zhang, Heng Ji, Jing Jiang, Juanzi Li, Aixin Sun, Xuanjing Huang, Tat-Seng Chua, Yu-Gang Jiang. 2025.<br><span class="resource-links">[Paper](https://arxiv.org/abs/2504.18838)</span>
- [Long Context vs. RAG for LLMs: An Evaluation and Revisits](https://arxiv.org/abs/2501.01880), **Xinze Li**, Yixin Cao, Yubo Ma, Aixin Sun. 2024.<br><span class="resource-links">[Paper](https://arxiv.org/abs/2501.01880) · [Code](https://github.com/lixinze777/LC_VS_RAG) · [Related SIGIR Tutorial](https://sites.google.com/view/sigir25-lc-vs-rag/)</span>


# 🏆 Honors and Awards
- *2023 - 2027*, **NTU Research Scholarship (Full Scholarship)**, Nanyang Technological University.
- *2017 - 2021*, **NUS Science & Technology Undergraduate Scholarship (Full Scholarship)**, National University of Singapore.
- *2012 - 2016*, **Singapore Government SM1 Full Scholarship**.


<span class="anchor" id="-educations"></span>

# 📖 Education
- *2023.08 - present*, Ph.D. student, College of Computing and Data Science (CCDS), Nanyang Technological University (NTU).
- *2017.08 - 2021.06*, Bachelor of Computing with Honours (Distinction), School of Computing (SoC), National University of Singapore (NUS).

# 💬 Invited Talks
- *2025.07*, Organizer and lead speaker, [Long Context vs. RAG: Strategies for Processing Long Documents in LLMs](https://sites.google.com/view/sigir25-lc-vs-rag/), Padova, Italy. Covered long-context methods, RAG pipelines, evaluation, and deployment trade-offs. <span class="venue-tag venue-tag--spotlight">SIGIR 2025 · Tutorial</span>

<span class="anchor" id="-internships"></span>

# 💻 Experience
- *2025.08 - 2026.02*, **Research Intern**, Shanghai AI Laboratory, Shanghai, China.<br>Developed EMemBench from interactive trajectory logging and verifiable question generation to reproducible evaluation across text and visual games.
- *2021.09 - 2023.07*, **Project Officer**, S-Lab for Advanced Intelligence, NTU, Singapore.<br>Led the Hierarchical Script Generation project and contributed to name disambiguation and causal-relation extraction for MMEKG.
- *2019.05 - 2019.08*, **Full Stack Developer Intern**, CGS-CIMB, Singapore.<br>Built web and database workflows for an FX administration system using Python, Django, and SQL.

# 📚 Academic Services
- *Conference Reviewer*: NeurIPS 2025, ACL ARR (ACL 2024, EMNLP 2024, NAACL 2024, ACL 2025, EMNLP 2025)
- *Journal Reviewer*: TOIS
