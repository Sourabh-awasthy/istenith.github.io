// import vim_plugins from "@/app/hello/page.mdx"
   const blogdata = [
  {
    id: 1,
    title: "Vim plugins that make life easy!",
    src:"/assets/images/blogs_images/vim_plugin/vim.png",
    author: "Parth Pant",
    tags: ["linux", "vim", "neovim"],
    ctatext: "Read More",
    content:"Vim is a great text editor, in fact some would argue it is the best text editor! But the problem is that it is just a text editor. Nothing more, nothing lessPeople accustomed with using full fledged IDEs like Visual Studio, VS code, Atom etc. might feel hard to get started with vim. A great feature of vim is that it supports a large number of plugins that can increase its functionality in all the ways imaginable In this blog....."
,
    ctaLink: "/blogs/vim_plugins",
    
    description:
      "Vim is a great text editor, in fact some would argue it is the best text editor! But the problem is that it is just a text editor. Nothing more, nothing less...",

    
  },
  {
    id: 2,
    title: "Challenges and Oppurtunities in Intelligent Hardware",
    src: "/assets/images/blogs_images/challlenges_in_hardware/cover.jpeg",
    author: "Vansh Thakur",
    tags: ['hardware', 'IoT', 'AI','embedded systems'],
    content:"More data has been created in the past two years than the entire history of the human race. This is primarily boosted by the explosion in the sensing and conditioning market **(around (10 billion sensors per year in 2013, expected to reach 1 trillion by 2020)** and connected devices **(6.4 billion in 2016, approximately 20.8 billion by 2020).** These sensors and devices generate hundreds of zetabytes of data per year — petabytes.....",

    ctatext: "Read More",
    ctaLink: "/blogs/Challeges_inHardware",
    description:
      "More data has been created in the past two years than the entire history of the human race... ",
    //   mdfile: vim_plugins, 
  },
  {
    id: 3,
    title: "Julia on the GPU",
    src:"/assets/images/blogs_images/julia_on_gpu/mandopart.png",
    author: "Arsh Sharma",
    tags: ['julia', 'packages'],
    content:"Nowadays GPUs are not just confined to gaming requirements. A GPUs ability to distribute the computational load over hundreds of cores makes then effective enough for a variety of applications like Machine Learning, scientific computing etc. The Julia language has a powerful GPU-compute stack that goes by the name of JuliaGPU.Today we will try to use the GoogleCollab ....",
    ctatext: "Read More",
    ctaLink: "/blogs/juliaon_gpu",
    description:

      "This article is a step by step detail of how one can write his/her own package manager in Julia...",
    //   mdfile: vim_plugins, 
  },
  {
    id: 4,
    title: "Creating Packages in Julia",
    src: "/assets/images/blogs_images/creating_packages_in_julia/julia.png",
    author: "Arsh Sharma",
    tags: ['julia', 'GPU'],
    content:"We are well aware that in order to use the functionality that Julia offers we often need to write out own packages so that we and many people across the world can use those packages into their workflow. Julia has a very rich package ecosystem and a powerful package manager.....",
    ctatext: "Read More",
    ctaLink: "/blogs/Creating_Packages_in_Julia",
    description:
      "Nowadays GPUs are not just confined to gaming requirements. A GPUs ability to distribute the computational load over hundreds of cores makes then effective enough for a variety of applications like Machine Learning, scientific computing etc...",
    //   mdfile: vim_plugins, 
  },
  {
    id: 5,
    title: "Choosing the right Linux distribution",
    src: "/assets/images/blogs_images/Choosing_the_right_Linux_distribution/cover.jpg",
    author: "Parth Pant",
    ctatext: "Read More",
content:"For a beginner, getting into the world of linux can be a bit of a challenge. Linux is an open source operating system that is designed to do almost anything that any other OS like Windows or Mac can do.Linux is open source! This means anyone can change, edit and redistribute its source code. This is why there are various different distributions of  ...",
    
    ctaLink: "/blogs/choosing_theright_linux",
    tags: ["linux", "noobfriendly"],
    description:
      "This blog will give you an idea about different distros that are available and which one you should choose as a beginner. Lets begin with looking at some of the big names that are available...",
    //   mdfile: vim_plugins, 
  },
  {
    id: 6,
    title: "Linux Shells",
    src:"/assets/images/blogs_images/Linux_shell/coverlinux.jpg",
    author: "Sumit Dhiman",
    content:"A Shell provides you with an interface to the Unix system. It gathers input from you and executes programs based on that input. When a program finishes executing, it displays that program's output.Shell is an environment in which we can run our commands, programs, and shell scripts. Shells come in a variety of flavours, much as operating systems....",
    tags: ['linux', 'userfriendly', 'shell', 'bash'],
    ctatext: "Read More",
    ctaLink: "/blogs/Linux_shell",
    description:
      "A Shell provides you with an interface to the Unix system. It gathers input from you and executes programs based on that input. When a program finishes executing, it displays that program's output...",
    //   mdfile: vim_plugins, 
  },
  {
    id: 7,
    title: "Serverless Computing",
    src: "/assets/images/blogs_images/serverless/serverless.jpg",
    author: "Gaurav Pandey",
    tags: ['serverless', 'development'],
    ctatext: "Read More",
    content:"Developers spend countless hours solving business problems with code. Then it’s the ops team’s turn to spend countless hours, first figuring out how to get the code that developers write up and running on whatever computers are available, and second making  ....",
    ctaLink: "/blogs/serverless.mdx",
    description:
      "Developers spend countless hours solving business problems with code. Then it’s the ops team’s turn to spend countless hours, first figuring out how to get the code that developers write up and running on whatever computers are available, and second making sure those computers operate smoothly...",
    //   mdfile: vim_plugins, 
  },
  {
    id: 8,
     title: "Static Single Assignment(SSA) in compilers",
    src:"/assets/images/blogs_images/ssa/ssa.png" ,
    author: "Arsh Sharma",
    tags: ['compilers', 'development'],
    ctatext: "Read More",
    content:"In computer programming, as in real life, names are useful handles for concrete entities. The key point about SSA is that having unique names for distinct entities reduces uncertainty and imprecision.... ",
    ctaLink: "/blogs/ssa",
    description:
      "In computer programming, as in real life, names are useful handles for concrete entities. The key point about SSA is that having unique names for distinct entities reduces uncertainty and imprecision... ",
    //   mdfile: vim_plugins, 
  },
  {
    id: 9,
    title: "Useful Command Line Tools",
    src: "/assets/images/blogs_images/terminal_utilites/terminal.png",
    author: "Deepak Singh",
    tags: ['terminal', 'linux','noobfriendly'],
    ctatext: "Read More",
    content:"The Linux command line is a text-based computer interface, and It is also known as the shell, terminal, console, prompt, and a variety of other names, and it can be intimidating at first for beginners.However, once you've grown accustomed to it, you'll realise how significant it is.In Linux, the command line is exceptionally strong and quick. ...",
    ctaLink: "/blogs/terminalutilities",
    description:
      "The Linux command line is a text-based computer interface, and It is also known as the shell, terminal, console, prompt, and a variety of other names, and it can be intimidating at first for beginners...",
    //   mdfile: vim_plugins, 
  },
];

export default blogdata;