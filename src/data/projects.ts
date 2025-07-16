interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  reportUrl?: string;
  presentationUrl?: string;
  organization?: string;
  period?: string;
  tags?: string[];
  details?: string;
  link?: string;
}

interface ProjectsByTopic {
  [key: string]: Project[];
}

export const projectsByTopic: ProjectsByTopic = {
  'computer-vision': [
    {
      title: 'Medical Device Usability Testing Automation',
      description: 'Automating medical device usability testing using activity recognition, object recognition, and LLMs with data from Tobii Pro 3 glasses on a ventilator.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/medical-device.jpg`,
      organization: 'Product Development Lab, ETH Zürich',
      period: 'Apr 2024 - Oct 2024',
      tags: ['Computer Vision', 'Machine Learning', 'LLMs', 'Wearables'],
      details: 'Collected dataset, Object Recognition using YOLO to identify classes on screen and a transformer network for Activity Recognition. LLM Wrapper to answer questions for Ventilator Usability Testing.',
    },
    {
      title: 'Pedestrian Future Pose Estimation',
      description: 'Worked on predicting future pedestrian poses for autonomous vehicles.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/pedestrian.jpg`,
      organization: 'Toyota Technological Institute (TTI), Nagoya, Japan',
      period: 'June 2020 - Mar 2021',
      tags: ['Computer Vision', 'Pose Estimation', 'Deep Learning'],
      details: 'Built a Pedestrian Action Forecasting pipeline using Sensor Fusion of Thermal-Visible Cameras. Investigated GAN-based architectures and Encoder-Decoder with prediction-optimization steps for scene forecasting. Annotated video sequences and performed an ablation study with the novel models having atleast 5% over SOTA in pixel accuracy and IoU.',
      link: 'https://scholar.google.co.in/citations?user=cwl2lDIAAAAJ&hl=en'
    },
    {
      title: 'Breast Cancer Tumor Subtyping',
      description: 'Using Graph Neural Networks and Vision Transformers for Tumor Subtyping.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/breast-cancer.jpg`,
      organization: 'IKIM, University Hospital Essen, Germany',
      period: 'Jan 2025 - Apr 2025',
      tags: ['Medical Imaging', 'Machine Learning', 'Deep Learning'],
      details: 'Worked on breast cancer tumor subtyping using Graph Neural Networks and Vision Transformers.'
    },
    {
      title: 'Multi-Task Learning for Semantics and Depth',
      description: 'Autonomous Driving Course Project.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/semdepth.png`,
      tags: ['Computer Vision', 'Deep Learning', 'Autonomous Driving'],
      details: 'Used Pre-trained ResNet-50 Encoder and Atrous Pooling Conv Layers with Skip connections as Decoder for Semantic and Depth tasks. Task Distillation, Branched Architecture and other techniques were tried and their performance was compared.',
    }
  ],
  '3D-Vision': [
    {
      title: 'Efficient NeRFs for Robotic Mapping',
      description: 'NeRF based approach for 3D reconstruction of RGB & RGB-D data to perform online SLAM and inferred the global map within 50ms.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/nerf.jpg`,
      organization: 'Autonomous Systems Lab, ETH Zürich',
      period: 'Oct 2022 - Jan 2023',
      tags: ['3D Vision', 'Robotics', 'SLAM', 'NeRF'],
      details: 'NeRF based approach for 3D reconstruction of RGB & RGB-D data to perform online SLAM and inferred the global map within 50ms. Compared Instant-NeRF and other NeRF-based SLAM methods based on their reliability and inference speed.'
    },
    {
      title: 'Image Stabilization for Hololens Camera',
      description: 'Built an offline 3D Reconstruction process using RGB-D mesh and NeRF.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/hololens.jpg`,
      tags: ['3D Vision', 'Computer Vision', 'NeRF', 'AR/VR'],
      details: 'Built an offline 3D Reconstruction process using RGB-D mesh and NeRF to enhance rendering quality for remote viewers. Applied Image Enhancement techniques, including Pix2Pix GAN, to reduce motion blur and expand field-of-view for augmented reality applications.',
    },
    {
      title: '3D Object Detection from Lidar Point Clouds',
      description: 'Autonomous Driving Course Project.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/lidar.jpg`,
      tags: ['3D Vision', 'Computer Vision', 'Point Clouds', 'Autonomous Driving'],
      details: 'A two-stage network based on PointNet for the Classification and Segmentation task built with Abstraction and Grouping layers.',
    }
  ],

  'machine-learning': [
    {
      title: 'Physics-Informed Neural Networks for Power Transformer Efficiency',
      description: 'Researched Physics-Informed Neural Networks (PINNs) to determine power transformer efficiency.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/pinns.jpg`,
      organization: 'Hitachi Energy',
      period: 'Apr 2023 - Sept 2023',
      tags: ['Machine Learning', 'Neural Networks', 'Physics-Informed'],
      details: 'Developed Physics-Informed Neural Networks to localize power loss and improve transformer efficiency. Created automated pipelines for data acquisition, model training, and inference.',
      link: 'https://docs.google.com/presentation/d/1QV51QCoukQvfpR6q4YjmSHPN18yuVOOG/edit?usp=drive_link&ouid=105761956712648740434&rtpof=true&sd=true'
    },
    {
      title: 'Power Grid Dataset Benchmarking',
      description: 'Benchmarking datasets for Graph Neural Networks in power grid applications.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/power-grid.jpg`,
      organization: 'Reliability and Risk Engineering Lab, ETH Zürich',
      period: 'Jan 2023 - Apr 2023',
      tags: ['Machine Learning', 'Graph Neural Networks', 'Data Analysis'],
    },
    {
      title: '3D Human Motion Prediction',
      description: 'Designed a Graph Encoder and an LSTM Decoder for temporal motion prediction.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/human-motion.jpg`,
      tags: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Graph Neural Networks'],
      details: 'Designed a Graph Encoder to model spatial dependencies between joints and an LSTM Decoder for temporal motion prediction, improving realism and accuracy. Employed a motion discriminator to regularize predictions (Adversarial Training) ensuring smooth and realistic motion sequences. Achieved a 16% reduction in MPJPE error compared to existing methods on AMASS and Human3.6M datasets.'
    }
  ],

  'data-science': [
    {
      title: 'Financial Data Analysis',
      description: 'Project focused on analyzing financial data and market trends.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/financial.jpg`,
      organization: 'Interactive Visual Data Analysis Group, University of Zürich',
      period: 'April 2024 - December 2024',
      tags: ['Data Science', 'Financial Analysis', 'Visualization'],
      details: 'Created new features and Feature Engineered outputs from an LLM API. Built visualizations for bringing Human-in-loop, bridging the gap in analysis of the stock market. Work done @ Interactive Visual and Data Analytics Lab, University of Zürich.'
    },
    {
      title: 'Hack4Good - Commodity Price Forecast',
      description: 'Predicting commodity prices for conflict zones using Time Series Analysis.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/hack4good.jpg`,
      tags: ['Data Science', 'Time Series Analysis', 'Machine Learning'],
      details: 'Predicted commodity prices for conflict zones using Time Series Analysis with methods like GARCH & ARIMA. Collaborating with a multidisciplinary team, ensured Robust Imputation and accurate forecasting of sparse and incomplete datasets to aid in resource allocation and policy planning for NGO-Impact.'
    }
  ],
  'edge-AI': [
    {
      title: 'Analysis using FitBit Data',
      description: 'Developing Algorithms for Step Count, Activity Recognition, FitBit Location and Path Recognition using Accelerometer and Gyroscope data.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/wearable.jpg`,
      organization: 'Product Development Lab, ETH Zürich',
      period: 'Apr 2022 - Jun 2022',
      tags: ['Wearables', 'Signal Processing', 'Machine Learning', 'Edge AI'],
      details: 'Developing Algorithms for Step Count, Activity Recognition, FitBit Location and Path Recognition using Accelerometer and Gyroscope data. Designed a lightweight processing pipeline for doing these tasks.',
    },
    {
      title: 'Object Recognition on MAX7800',
      description: 'YOLO based Object Recognition by Quantization to int8.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/mlonmcu.png`,
      organization: 'Project Based Learning, ETH Zürich',
      period: 'Nov 2023 - Dec 2023',
      tags: ['Quantization', 'Machine Learning', 'Inference', 'Edge AI'],
      details: 'Quantized a YOLO model to int8 for efficient object detection. Deployed the lightweight YOLO model on MAX 78000 and STM32 microcontrollers. Developed and implemented an additional neural network for image classification.'
    }
  ],
  'control-systems': [
    {
      title: 'Robotic Leg Exoskeleton',
      description: 'Design and Simulation of Force Field and Computed Torque Control for Robotic Leg Exoskeleton.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/iitb_thesis.png`,
      organization: 'IIT Bombay',
      period: 'Jan 2020 - May 2020',
      tags: ['Control Systems', 'Robotics', 'Biomechanics'],
      details: 'MATLAB, Python',
      link: 'https://'
    },
    {
      title: 'Gait Analysis',
      description: 'Static and Dynamic Stability Analysis of People with Paraplegic Gait.',
      imageUrl: `${import.meta.env.BASE_URL}images/projects/iitgn.png`,
      organization: 'IIT Gandhinagar',
      period: 'May 2019 - July 2019',
      tags: ['Control Systems', 'Biomechanics'],
      details: 'Vicon Nexus, Wii Balance Board, Python, Labview',
      link: 'https://drive.google.com/file/d/1fx4CJ_HaKcPPwmtVXWCNSzUxdKa7LrnV/view?usp=sharing'
    }
  ]
};
  
