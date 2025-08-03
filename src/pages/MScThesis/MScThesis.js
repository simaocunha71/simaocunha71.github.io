import React, { useState } from 'react';
import { FaFilePdf, FaGithub, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import Flag from "react-world-flags";
import './MScThesis.css';

const MScThesis = () => {
  // Dados das imagens organizados por categoria
  const categories = {
    "Specific Diagrams": {
      "1": { src: 'assets/docs/msc-thesis/specific_diagrams/architecture.svg', title: 'Architecture' , 
             description: 'System architecture for execution and measurement', resize: "75%"},
      "2": { src: 'assets/docs/msc-thesis/specific_diagrams/csv_headers.svg', title: 'CSV Headers Diagram', 
             description: 'Structure of each CSV file', resize: "75%" },
      "3": { src: 'assets/docs/msc-thesis/specific_diagrams/returned_prompts.svg', title: 'Generations File System Diagram',
             description: 'Generations file system of "returned_prompts" directory'
       },
      "4": { src: 'assets/docs/msc-thesis/specific_diagrams/shot_prompting_methodology.svg', title: 'Shot Prompting Methodology',
             description: 'Prompt generation with N shots'
       },
    },
    "HumanEval-X": {
      "0-shot": {
        "5": {src: 'assets/docs/msc-thesis/humaneval_x/codebleu_0shot_humaneval_x.png', title: 'CodeBLEU',
              description: 'CodeBLEU for HumanEval-X in 0-Shot Prompting'
         },
        "6": {src: 'assets/docs/msc-thesis/humaneval_x/googlebleu_0shot_humaneval_x.png', title: 'GoogleBLEU',
              description: 'GoogleBLEU for HumanEval-X in 0-Shot Prompting'
         },
        "7": {src: 'assets/docs/msc-thesis/humaneval_x/sacrebleu_0shot_humaneval_x.png', title: 'SacreBLEU',
              description: 'SacreBLEU for HumanEval-X in 0-Shot Prompting' },
        "8": {src: 'assets/docs/msc-thesis/humaneval_x/pass1_0shot_humaneval_x.png', title: 'Pass@1',
              description: 'Pass@1 for HumanEval-X in 0-Shot Prompting' },
        "9": {src: 'assets/docs/msc-thesis/humaneval_x/pass10_0shot_humaneval_x.png', title: 'Pass@10',
              description: 'Pass@10 for HumanEval-X in 0-Shot Prompting' },
        "10": { src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_energy_0shot.png', title: 'CPU Energy',
              description: 'CPU Energy Consumption Across Programming Languages From HumanEval-X in 0-Shot Prompting' },
        "11": { src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_time_0shot.png', title: 'Execution Time',
              description: 'Execution Time Across Programming Languages From HumanEval-X in 0-Shot Prompting' },
      },
      "3-shot": {
        "12": {src: 'assets/docs/msc-thesis/humaneval_x/codebleu_3shot_humaneval_x.png', title: 'CodeBLEU',
              description: 'CodeBLEU for HumanEval-X in 3-Shot Prompting' },
        "13": {src: 'assets/docs/msc-thesis/humaneval_x/googlebleu_3shot_humaneval_x.png', title: 'GoogleBLEU',
              description: 'GoogleBLEU for HumanEval-X in 3-Shot Prompting' },
        "14": {src: 'assets/docs/msc-thesis/humaneval_x/sacrebleu_3shot_humaneval_x.png', title: 'SacreBLEU',
              description: 'SacreBLEU for HumanEval-X in 3-Shot Prompting' },
        "15": {src: 'assets/docs/msc-thesis/humaneval_x/pass1_3shot_humaneval_x.png', title: 'Pass@1',
              description: 'Pass@1 for HumanEval-X in 3-Shot Prompting' },
        "16": {src: 'assets/docs/msc-thesis/humaneval_x/pass10_3shot_humaneval_x.png', title: 'Pass@10',
              description: 'Pass@10 for HumanEval-X in 3-Shot Prompting' },
        "17": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_energy_3shot.png', title: 'CPU Energy',
              description: 'CPU Energy Consumption Across Programming Languages From HumanEval-X in 3-Shot Prompting' },
        "18": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_time_3shot.png', title: 'Execution Time',
              description: 'Execution Time Across Programming Languages From HumanEval-X in 3-Shot Prompting' },
      },
      "Other": {
        "19": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_differences_energy.png', title: 'CPU Energy Differences',
              description: 'Percentage Differences in CPU Energy (%) for HumanEval-X Between 0-Shot and 3-Shot Prompting' },
        "20": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_differences_time.png', title: 'Execution Time Differences',
              description: 'Percentage Differences in Execution Time (%) for HumanEval-X Between 0-Shot and 3-Shot Prompting' },
        "21": {src: 'assets/docs/msc-thesis/humaneval_x/wilson_confidence_0shot.png', title: 'Wilson Confidence Intervals (0-shot)',
              description: 'Wilson Confidence Intervals by LLM and Language - 0-Shot Prompting', resize: "75%" },
        "22": {src: 'assets/docs/msc-thesis/humaneval_x/wilson_confidence_3shot.png', title: 'Wilson Confidence Intervals (3-shot)',
              description: 'Wilson Confidence Intervals by LLM and Language - 3-Shot Prompting', resize: "75%" },
        "23": {src: 'assets/docs/msc-thesis/humaneval_x/shapiro_humanevalx_energy.png', title: 'Shapiro-Wilk Tests (CPU Energy)',
              description: 'Shapiro-Wilk Tests for HumanEval-X in Terms of CPU Energy', resize: "75%" },
        "24": {src: 'assets/docs/msc-thesis/humaneval_x/shapiro_humanevalx_time.png', title: 'Shapiro-Wilk Tests (Execution Time)',
              description: 'Shapiro-Wilk Tests for HumanEval-X in Terms of Execution Time', resize: "75%" },
        "25": {src: 'assets/docs/msc-thesis/humaneval_x/mannwhitney_humanevalx_energy.png', title: 'Mann-Whitney U Tests (CPU Energy)',
              description: 'Statistical Tests for HumanEval-X in Terms of CPU Energy', resize: "75%" },
        "26": {src: 'assets/docs/msc-thesis/humaneval_x/mannwhitney_humanevalx_time.png', title: 'Mann-Whitney U Tests (Execution Time)',
              description: 'Statistical Tests for HumanEval-X in Terms of Execution Time', resize: "75%" },
        "27": {src: 'assets/docs/msc-thesis/humaneval_x/python4_humanevalx.png', title: 'Number of tokens generated in prompt "Python/4"',
              description: 'Number of Tokens Generated by Meta-Llama-3-8B-Instruct-Q6_k for the Prompt Python/4 From HumanEval-X', resize: "75%" },
        "28": {src: 'assets/docs/msc-thesis/humaneval_x/python5_humanevalx.png', title: 'Number of tokens generated in prompt "Python/5"',
              description: 'Number of Tokens Generated by Meta-Llama-3-8B-Instruct-Q6_k for the Prompt Python/5 From HumanEval-X', resize: "75%" },
        "29": {src: 'assets/docs/msc-thesis/humaneval_x/ranking_humanevalx.png', title: 'LLMs ranking',
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in HumanEval-X Benchmark', resize: "75%" },
      },
    },
    "MBPP+": {
      "0-shot": {
        "30": {src: 'assets/docs/msc-thesis/mbpp/mbpp_0-shot_Unsanitized.png', title: 'Pass@1 and Pass@10 (unsanitized)',
              description: 'Unsanitized Pass@1 and Pass@10 Scores for MBPP and MBPP+ in 0-Shot Prompting' },
        "31": {src: 'assets/docs/msc-thesis/mbpp/mbpp_0-shot_Sanitized.png', title: 'Pass@1 and Pass@10 (sanitized)',
              description: 'Sanitized Pass@1 and Pass@10 Scores for MBPP and MBPP+ in 0-Shot Prompting' },
        "32": {src: 'assets/docs/msc-thesis/mbpp/unsanitized_0shot_bleu_mbpp.png', title: 'BLEU scores (unsanitized)',
              description: 'Unsanitized CodeBLEU, SacreBLEU and GoogleBLEU Scores of LLMs During MBPP+ Execution in 0-Shot Prompting', resize: "60%" },
        "33": {src: 'assets/docs/msc-thesis/mbpp/sanitized_0shot_bleu_mbpp.png', title: 'BLEU scores (sanitized)',
              description: 'Sanitized CodeBLEU, SacreBLEU and GoogleBLEU Scores of LLMs During MBPP+ Execution in 0-Shot Prompting', resize: "60%" },
      },
      "3-shot": {
        "34": {src: 'assets/docs/msc-thesis/mbpp/mbpp_3-shot_Unsanitized.png', title: 'Pass@1 and Pass@10 (unsanitized)',
              description: 'Unsanitized Pass@1 and Pass@10 Scores for MBPP and MBPP+ in 3-Shot Prompting' },
        "35": {src: 'assets/docs/msc-thesis/mbpp/mbpp_3-shot_Sanitized.png', title: 'Pass@1 and Pass@10 (sanitized)',
              description: 'Sanitized Pass@1 and Pass@10 Scores for MBPP and MBPP+ in 3-Shot Prompting' },
        "36": {src: 'assets/docs/msc-thesis/mbpp/unsanitized_3shot_bleu_mbpp.png', title: 'BLEU scores (unsanitized)',
              description: 'Unsanitized CodeBLEU, SacreBLEU and GoogleBLEU Scores of LLMs During MBPP+ Execution in 3-Shot Prompting', resize: "60%" },
        "37": {src: 'assets/docs/msc-thesis/mbpp/sanitized_3shot_bleu_mbpp.png', title: 'BLEU scores (sanitized)',
              description: 'Sanitized CodeBLEU, SacreBLEU and GoogleBLEU Scores of LLMs During MBPP+ Execution in 3-Shot Prompting', resize: "60%" },
      },
      "Other": {
        "38": {src: 'assets/docs/msc-thesis/mbpp/mbpp_energy.png', title: 'CPU Energy',
              description: 'Comparison of CPU Energy Consumption for LLMs During MBPP+ in 0-Shot and 3-Shot Prompting', resize: "75%" },
        "39": {src: 'assets/docs/msc-thesis/mbpp/mbpp_time.png', title: 'Execution Time',
              description: 'Comparison of Execution Time for LLMs During MBPP+ in 0-Shot and 3-Shot Prompting', resize: "75%" },
        "40": {src: 'assets/docs/msc-thesis/mbpp/mbpp_energy_gain_percentage.png', title: 'CPU Energy Differences',
              description: 'Percentage Gains in CPU Energy for LLMs during MBPP+ execution from 0-Shot to 3-Shot Prompting', resize: "75%"  },
        "41": {src: 'assets/docs/msc-thesis/mbpp/mbpp_execution_time_gain_percentage.png', title: 'Execution Time Differences',
              description: 'Percentage Gains in Execution Time for LLMs during MBPP+ execution from 0-Shot to 3-Shot Prompting', resize: "75%"  },
        "42": {src: 'assets/docs/msc-thesis/mbpp/shapiro_mbpp_energy.png', title: 'Shapiro-Wilk Tests (CPU Energy)',
              description: 'Shapiro-Wilk Tests for MBPP+ in Terms of CPU Energy', resize: "75%" },
        "43": {src: 'assets/docs/msc-thesis/mbpp/shapiro_mbpp_time.png', title: 'Shapiro-Wilk Tests (Execution Time)',
              description: 'Shapiro-Wilk Tests for MBPP+ in Terms of Execution Time', resize: "75%" },
        "44": {src: 'assets/docs/msc-thesis/mbpp/mannwhitney_mbpp_energy.png', title: 'Mann-Whitney U Tests (CPU Energy)',
              description: 'Statistical Tests for MBPP+ in Terms of CPU Energy', resize: "75%" },
        "45": {src: 'assets/docs/msc-thesis/mbpp/mannwhitney_mbpp_time.png', title: 'Mann-Whitney U Tests (Execution Time)',
              description: 'Statistical Tests for MBPP in Terms of Execution Time', resize: "75%" },
        "46": {src: 'assets/docs/msc-thesis/mbpp/mbpp_tokens_Mbpp_6.png', title: 'Number of tokens generated in prompt "Mbpp/6"',
              description: 'Number of Tokens Generated by codellama-7b-instruct.Q5_k_M for the Prompt Mbpp/6 From MBPP+', resize: "75%"  },
        "47": {src: 'assets/docs/msc-thesis/mbpp/mbpp_tokens_Mbpp_7.png', title: 'Number of tokens generated in prompt "Mbpp/7"',
              description: 'Number of Tokens Generated by codellama-7b-instruct.Q5_k_M for the Prompt Mbpp/7 From MBPP+', resize: "75%"  },
        "48": {src: 'assets/docs/msc-thesis/mbpp/ranking_mbpp.png', title: 'LLMs ranking',
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in MBPP+ Benchmark', resize: "75%" },
      },
    },
    CyberSecEval: {
      "Autocomplete": {
        "0-shot": {
          "49": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_0shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Autocomplete in 0-Shot Prompting' },
          "50": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_0shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Autocomplete in 0-Shot Prompting' },
          "51": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_bleu_0shot.png', title: 'BLEU Scores',
              description: 'BLEU Scores by Each LLM for Each Programming Language for Autocomplete in 0-Shot Prompting' },
          "52": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_passrate_0shot.png', title: 'Pass Rate',
              description: 'Pass Rate by Each LLM for Each Programming Language for Autocomplete in 0-Shot Prompting' },
        },
        "3-shot": {
          "53": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_3shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Autocomplete in 3-Shot Prompting' },
          "54": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_3shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Autocomplete in 3-Shot Prompting' },
          "55": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_bleu_3shot.png', title: 'BLEU Scores',
              description: 'BLEU Scores by Each LLM for Each Programming Language for Autocomplete in 3-Shot Prompting' },
          "56": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_passrate_3shot.png', title: 'Pass Rate',
              description: 'Pass Rate by Each LLM for Each Programming Language for Autocomplete in 3-Shot Prompting' },
        },
        "Other": {
          "57": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_gains.png', title: 'CPU Energy Differences',
              description: 'CPU Energy Percentage Differences by Each LLM for Each Programming Language for Autocomplete From 0-Shot to 3-Shot Prompting' },
          "58": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_gains.png', title: 'Execution Time Differences',
              description: 'Execution Time Percentage Differences by Each LLM for Each Programming Language for Autocomplete From 0-Shot to 3-Shot Prompting' },
          "59": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/ranking_autocomplete.png', title: 'LLMs ranking', resize: "75%",
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in Autocomplete Benchmark' },
        },
      },
      "Instruct": {
        "0-shot": {
          "60": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_0shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Instruct in 0-Shot Prompting' },
          "61": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_0shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Instruct in 0-Shot Prompting' },
          "62": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_bleu_0shot.png', title: 'BLEU Scores',
              description: 'BLEU Scores by Each LLM for Each Programming Language for Instruct in 0-Shot Prompting' },
          "63": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_passrate_0shot.png', title: 'Pass Rate',
              description: 'Pass Rate by Each LLM for Each Programming Language for Instruct in 0-Shot Prompting'  },
        },
        "3-shot": {
          "64": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_3shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Instruct in 3-Shot Prompting' },
          "65": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_3shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Instruct in 3-Shot Prompting' },
          "66": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_bleu_3shot.png', title: 'BLEU Scores',
              description: 'BLEU Scores by Each LLM for Each Programming Language for Instruct in 3-Shot Prompting' },
          "67": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_passrate_3shot.png', title: 'Pass Rate',
              description: 'Pass Rate by Each LLM for Each Programming Language for Instruct in 3-Shot Prompting'  },
        },
        "Other": {
          "68": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_gains.png', title: 'CPU Energy Differences',
              description: 'CPU Energy Percentage Differences by Each LLM for Each Programming Language for Instruct From 0-Shot to 3-Shot Prompting' },
          "69": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_gains.png', title: 'Execution Time Differences',
              description: 'Execution Time Percentage Differences by Each LLM for Each Programming Language for Instruct From 0-Shot to 3-Shot Prompting' },
          "70": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/ranking_instruct.png', title: 'LLMs ranking',
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in Instruct Benchmark', resize: "75%" },
        },
      },
      "False Rate Refusal": {
        "71": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_energy.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for False Rate Refusal' },
        "72": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_time.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for False Rate Refusal' },
        "73": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_refusalrate.png', title: 'Refusal Rate',
              description: 'Refusal Rate by each LLM for each Programming Language for False Rate Refusal', resize: "75%"  },
        "74": {src: 'assets/docs/msc-thesis/cyberseceval/frr/ranking_frr.png', title: 'LLMs ranking',
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in False Rate Refusal Benchmark', resize: "75%" },
      },
      "Vulnerability Exploitation": {
        "0-shot": {
          "75": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_energy_0shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Canary Exploit in 0-Shot Prompting' },
          "76": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_time_0shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Canary Exploit in 0-Shot Prompting' },
          "77": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_score_0shot.png', title: 'Scores',
              description: 'Score by Each LLM for Each Programming Language for Canary Exploit in 0-Shot Prompting', resize: "75%"  },
        },
        "3-shot": {
          "78": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_energy_3shot.png', title: 'CPU Energy',
              description: 'CPU Energy by Each LLM for Each Programming Language for Canary Exploit in 3-Shot Prompting' },
          "79": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_time_3shot.png', title: 'Execution Time',
              description: 'Execution Time by Each LLM for Each Programming Language for Canary Exploit in 3-Shot Prompting' },
          "80": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_score_3shot.png', title: 'Scores',
              description: 'Score by Each LLM for Each Programming Language for Canary Exploit in 3-Shot Prompting', resize: "75%"  },
        },
        "Other": {
          "81": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_energy_gains.png', title: 'CPU Energy Differences',
              description: 'CPU Energy Percentage Differences by Each LLM for Each Programming Language for Canary Exploit From 0-Shot to 3-Shot Prompting' },
          "82": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canaryexploit_time_gains.png', title: 'Execution Time Differences',
              description: 'Execution Time Percentage Differences by Each LLM for Each Programming Language for Canary Exploit From 0-Shot to 3-Shot Prompting' },
          "83": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/ranking_canaryexploit.png', title: 'LLMs ranking',
              description: 'Ranking of LLMs with Energy and Time and Their Ratios Compared to the Best Performer in Each Shot Setting in Canary Exploit Benchmark', resize: "75%" },
        },
      },
    },
  };

  const [language, setLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [selectedSubSubSubCategory, setSelectedSubSubSubCategory] = useState(null);
  const [image, setImage] = useState(null);
  
  // Alterar categoria selecionada
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSelectedSubSubSubCategory(null);
    setImage(null);
  };

    // Alterar categoria selecionada
    const handleSubCategoryChange = (category) => {
      setSelectedSubCategory(category);
      setSelectedSubSubCategory(null);
      setSelectedSubSubSubCategory(null);
      if(categories[selectedCategory][category].hasOwnProperty("src")){
        setImage(categories[selectedCategory][category])
      } else {
        setImage(null)
      }
    };

    // Alterar categoria selecionada
    const handleSubSubCategoryChange = (category) => {
      setSelectedSubSubCategory(category);
      setSelectedSubSubSubCategory(null);
      if(categories[selectedCategory][selectedSubCategory][category].hasOwnProperty("src")){
        setImage(categories[selectedCategory][selectedSubCategory][category])
      } else {
        setImage(null)
      }
    };

    const handleSubSubSubCategoryChange = (category) => {
      setSelectedSubSubSubCategory(category);
      if(categories[selectedCategory][selectedSubCategory][selectedSubSubCategory][category].hasOwnProperty("src")){
        setImage(categories[selectedCategory][selectedSubCategory][selectedSubSubCategory][category])
      } else {
        setImage(null)
      }
    };

    const texts = {
      pt: "Esta dissertação apresenta o desenvolvimento de uma plataforma abrangente para a avaliação de large language models (LLMs) através de tarefas de benchmarking com datasets estabelecidos, incluindo HumanEval-X, MBPP+ e CyberSecEval. O principal objetivo desta plataforma é avaliar não apenas a eficácia, eficiência energética e tempo de execução dos LLMs na geração de código, mas também as suas implicações de segurança em cenários de desenvolvimento de software. O documento analisa o contexto, a motivação e os objetivos do projeto, destacando a influência dos LLMs, como o GPT-4 e o Llama-2, no desenvolvimento de software. Discute os desafios do consumo de energia dos LLMs, especialmente quando são representados como modelos quantizados - modelos menores que funcionam melhor em hardware com recursos limitados - e examina o seu desempenho e requisitos em diferentes linguagens de programação e técnicas de prompt engineering. Os resultados mostraram que o consumo de energia e o tempo de execução variaram entre diferentes LLMs, com base no benchmark, na linguagem de programação e no tipo de prompting (0-shot vs 3-shot). De um modo geral, o 3-shot prompting levou a um menor consumo de energia e a um tempo de execução menor em comparação com 0-shot. Além disso, pass@10 superou pass@1, e SacreBLEU e GoogleBLEU melhorou com o 3-shot prompting, enquanto que CodeBLEU diminuiu. Além disso, a pesquisa destaca os resultados do benchmark CyberSecEval, que avalia a segurança do código gerado e revela vulnerabilidades em vários LLMs. Isso mostra a importância de considerar a segurança, além da eficiência energética e do tempo de execução, ao escolher um LLM para o desenvolvimento de software. Esta dissertação analisa as métricas de desempenho dos LLMs, como correção funcional e qualidade do código, contribuindo para práticas de engenharia de software sustentável. Ao focar na sustentabilidade e na segurança ao implementar LLMs, oferece uma abordagem mais completa para o desenvolvimento de software, alinhada com os princípios modernos de sustentabilidade na engenharia de software.",
      en: "This dissertation presents the development of a comprehensive platform for evaluating large language models (LLMs) through benchmarking coding tasks with established datasets, including HumanEval-X, MBPP+, and CyberSecEval. The primary objective of this platform is to assess not only the effectiveness, energy efficiency and runtime of LLMs in generating code but also their security implications in software development scenarios. The document thoroughly explores the project’s context, motivation, and objectives, emphasizing the transformative influence of advanced LLMs, such as GPT-4 and Llama-2, on the software development landscape. It investigates the challenges associated with the energy consumption of LLMs, particularly when represented as quantized models - simplified (and smaller) models that are easier to run on hardware with limited resources - analysing their performance and resource requirements across different programming languages and prompt engineering techniques. The findings showed that energy consumption and runtime varied among different LLMs based on the benchmark, programming language and prompting type (0-shot vs 3-shot). Overall, 3-shot prompting led to lower energy consumption and faster runtime than 0-shot prompting. Pass@10 outperformed pass@1, and SacreBLEU and GoogleBLEU scores improved with 3-shot prompting, while CodeBLEU scores decreased. Additionally, the research highlights the findings from the CyberSecEval benchmark, which evaluates the security of generated code, revealing vulnerabilities inherent in the outputs of various LLMs. This underscores the critical need to consider security alongside energy efficiency and execution time when selecting an LLM for software development. Through an extensive analysis of LLM performance metrics, including functional correctness and code quality, this dissertation contributes to the advancement of sustainable software engineering practices. By prioritizing sustainability and security in LLM deployment, it offers a complete approach to software development that follows the recent, but important, sustainable principles in software development."
    };
    

  return (
    <div className="msc-thesis-container">
      <h1>Towards a Platform for Benchmarking Large Language Models</h1>
      <p >
  Author: <strong>Simão Pedro Sá Cunha</strong>
      </p> 
      <p >
    Supervisors: <strong>João Saraiva</strong> and <strong>Francisco Ribeiro</strong>
      </p>

      <div className="pdf-buttons">
      {/* Dropdown com estilo de botão para Pre-Dissertation */}
      <div className="dropdown">
        <button className="pdf-button dropdown-button">
          Pre-Dissertation
          <FaChevronDown size={14} style={{ marginLeft: "8px" }} />
        </button>
        <div className="dropdown-menu">
          <a
            href="assets/docs/msc-thesis/pdr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
          >
            <FaFilePdf size={20} style={{ marginRight: "8px" }} /> Report
          </a>
          <a
            href="assets/docs/msc-thesis/pdr_presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
          >
            <FaFilePdf size={20} style={{ marginRight: "8px" }} /> Presentation
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="pdf-button dropdown-button">
          Dissertation
          <FaChevronDown size={14} style={{ marginLeft: "8px" }} />
        </button>
        <div className="dropdown-menu">
          <a
            href="assets/docs/msc-thesis/dissertation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
          >
            <FaFilePdf size={20} style={{ marginRight: "8px" }} /> Dissertation
          </a>
          <a
            href="assets/docs/msc-thesis/presentation.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
          >
            <PiMicrosoftPowerpointLogoFill size={20} style={{ marginRight: "8px" }} /> Presentation
          </a>
          <a
            href="assets/docs/msc-thesis/presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
          >
            <FaFilePdf size={20} style={{ marginRight: "8px" }} /> Presentation
          </a>
        </div>
      </div>

      <a
        href="https://github.com/simaocunha71/msc-thesis"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        <FaGithub size={20} style={{ marginRight: "8px" }} />
        Repository
      </a>

      <a
        href="https://hdl.handle.net/1822/96851"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        <FaExternalLinkAlt size={20} style={{ marginRight: "8px" }} />
        RepositóriUM
      </a>


    </div>

<div className="abstract-container">
  <div className="abstract-header">
    <h2>{language === "en" ? "Abstract" : "Resumo"}</h2>
    <div className="button-container">
      <button
        onClick={() => setLanguage("en")}
        className={`language-button ${language === "en" ? "active" : ""}`}
      >
        <Flag code="GB" className="flag-icon" />
        English
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`language-button ${language === "pt" ? "active" : ""}`}
      >
        <Flag code="PT" className="flag-icon" />
        Português
      </button>
    </div>
  </div>
  <div className="abstract-content">
    <div className="text-description">
      {texts[language]}
    </div>
  </div>
</div>


          <h3 style={{ textAlign: 'center' }}>Select a category above to filter images.</h3>
      {/* Seleção de Categoria */}
      <div className="category-bar">
        {Object.keys(categories).map((category) => (
          <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      { categories[selectedCategory] &&
      <div className="category-bar">
        {Object.keys(categories[selectedCategory]).map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => handleSubCategoryChange(subcategory)}
            className={`category-button ${selectedSubCategory === subcategory ? 'active' : ''}`}
          >
              {categories[selectedCategory][subcategory].hasOwnProperty("title") &&
              categories[selectedCategory][subcategory].title
              }
              {
                !categories[selectedCategory][subcategory].hasOwnProperty("title") &&
                subcategory
              }
          </button>
        ))}
      </div>
      }
      
      
      { categories[selectedCategory] && categories[selectedCategory][selectedSubCategory] &&
      !categories[selectedCategory][selectedSubCategory].hasOwnProperty("title") &&
      
      <div className="category-bar"> 
        {Object.keys(categories[selectedCategory][selectedSubCategory]).map((subsubcategory) => (
          <button
          key={subsubcategory}
          onClick={() => handleSubSubCategoryChange(subsubcategory)}
          className={`category-button ${selectedSubSubCategory === subsubcategory ? 'active' : ''}`}
          >
            
              {categories[selectedCategory][selectedSubCategory][subsubcategory].hasOwnProperty("title") &&
              categories[selectedCategory][selectedSubCategory][subsubcategory].title
            }
              {
                !categories[selectedCategory][selectedSubCategory][subsubcategory].hasOwnProperty("title") &&
                subsubcategory
              }
          </button>
        ))}
      </div>
      }

      { categories[selectedCategory] && categories[selectedCategory][selectedSubCategory] 
        && categories[selectedCategory][selectedSubCategory][selectedSubSubCategory] 
        && !categories[selectedCategory][selectedSubCategory][selectedSubSubCategory].hasOwnProperty("title")
        &&
        
        <div className="category-bar"> 
        {Object.keys(categories[selectedCategory][selectedSubCategory][selectedSubSubCategory]).map((subsubsubcategory) => (
          <button
          key={subsubsubcategory}
          onClick={() => handleSubSubSubCategoryChange(subsubsubcategory)}
          className={`category-button ${selectedSubSubSubCategory === subsubsubcategory ? 'active' : ''}`}
          >
            
              {categories[selectedCategory][selectedSubCategory][selectedSubSubCategory][subsubsubcategory].hasOwnProperty("title") &&
              categories[selectedCategory][selectedSubCategory][selectedSubSubCategory][subsubsubcategory].title
            }
              {
                !categories[selectedCategory][selectedSubCategory][selectedSubSubCategory][subsubsubcategory].hasOwnProperty("title") &&
                subsubsubcategory
              }
          </button>
        ))}
      </div>
      }

      
    <div className="image-display">
      {image && (
        <>
          <img
            src={image.src}
            alt={image.title}
            className="selected-image"
            onClick={() => window.open(image.src, '_blank')} // Opens image in a new tab
            style={{
              cursor: 'pointer',
              ...(image.resize ? { width: image.resize, height: 'auto' } : { width: '100%', height: 'auto' })
            }}
          />
          <p className="image-title">{image.description}</p>
        </>
      )}
    </div>


      <br></br>
      <br></br>
      <br></br>
    </div>

  );
};

export default MScThesis;
