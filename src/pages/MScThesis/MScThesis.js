import React, { useState } from 'react';
import './MScThesis.css';

const MScThesis = () => {
  // Dados das imagens organizados por categoria
  const categories = {
    Final: {
      "1": { src: 'assets/docs/msc-thesis/final/architecture_final.svg', title: 'System Architecture for Execution and Measurement' },
      "2": { src: 'assets/docs/msc-thesis/final/csv_headers.drawio.svg', title: 'CSV Headers Diagram' },
      "3": { src: 'assets/docs/msc-thesis/final/returned_prompts.drawio.svg', title: 'Generations File System Diagram' },
      "4": { src: 'assets/docs/msc-thesis/final/shot_prompting example.drawio.svg', title: 'Shot Prompting Methodology' },
    },
    "HumanEval-X": {
      "0-shot": {
        "5": {src: 'assets/docs/msc-thesis/humaneval_x/codebleu_0shot_humaneval_x.png', title: 'CodeBLEU' },
        "6": {src: 'assets/docs/msc-thesis/humaneval_x/googlebleu_0shot_humaneval_x.png', title: 'GoogleBLEU' },
        "7": {src: 'assets/docs/msc-thesis/humaneval_x/sacrebleu_0shot_humaneval_x.png', title: 'SacreBLEU' },
        "8": {src: 'assets/docs/msc-thesis/humaneval_x/pass1_0shot_humaneval_x.png', title: 'Pass@1' },
        "9": {src: 'assets/docs/msc-thesis/humaneval_x/pass10_0shot_humaneval_x.png', title: 'Pass@10' },
        "10": { src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_energy_0shot.png', title: 'CPU Energy' },
        "11": { src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_time_0shot.png', title: 'Execution Time' },
      },
      "3-shot": {
        "12": {src: 'assets/docs/msc-thesis/humaneval_x/codebleu_0shot_humaneval_x.png', title: 'CodeBLEU' },
        "13": {src: 'assets/docs/msc-thesis/humaneval_x/googlebleu_0shot_humaneval_x.png', title: 'GoogleBLEU' },
        "14": {src: 'assets/docs/msc-thesis/humaneval_x/sacrebleu_0shot_humaneval_x.png', title: 'SacreBLEU' },
        "15": {src: 'assets/docs/msc-thesis/humaneval_x/pass1_0shot_humaneval_x.png', title: 'Pass@1' },
        "16": {src: 'assets/docs/msc-thesis/humaneval_x/pass10_0shot_humaneval_x.png', title: 'Pass@10' },
        "17": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_energy_0shot.png', title: 'CPU Energy' },
        "18": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_time_0shot.png', title: 'Execution Time' },
      },
      "Other": {
        "19": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_differences_energy.png', title: 'CPU Energy Differences' },
        "20": {src: 'assets/docs/msc-thesis/humaneval_x/humanevalx_differences_time.png', title: 'Execution Time Differences' },
        "21": {src: 'assets/docs/msc-thesis/humaneval_x/python4_humanevalx.png', title: 'Number of tokens generated in prompt "Python/4"' },
        "22": {src: 'assets/docs/msc-thesis/humaneval_x/python5_humanevalx.png', title: 'Number of tokens generated in prompt "Python/5"' }
      },
    },
    "MBPP+": {
      "0-shot": {
        "23": {src: 'assets/docs/msc-thesis/mbpp/mbpp_0-shot_Unsanitized.png', title: 'Pass@1 and Pass@10 (unsanitized)' },
        "24": {src: 'assets/docs/msc-thesis/mbpp/mbpp_0-shot_Sanitized.png', title: 'Pass@1 and Pass@10 (sanitized)' },
        "25": {src: 'assets/docs/msc-thesis/mbpp/unsanitized_0shot_bleu_mbpp.png', title: 'BLEU scores (unsanitized)' },
        "26": {src: 'assets/docs/msc-thesis/mbpp/sanitized_0shot_bleu_mbpp.png', title: 'BLEU scores (sanitized)' },
      },
      "3-shot": {
        "27": {src: 'assets/docs/msc-thesis/mbpp/mbpp_3-shot_Unsanitized.png', title: 'Pass@1 and Pass@10 (unsanitized)' },
        "28": {src: 'assets/docs/msc-thesis/mbpp/mbpp_3-shot_Sanitized.png', title: 'Pass@1 and Pass@10 (sanitized)' },
        "29": {src: 'assets/docs/msc-thesis/mbpp/unsanitized_3shot_bleu_mbpp.png', title: 'BLEU scores (unsanitized)' },
        "30": {src: 'assets/docs/msc-thesis/mbpp/sanitized_3shot_bleu_mbpp.png', title: 'BLEU scores (sanitized)' },
      },
      "Other": {
        "31": {src: 'assets/docs/msc-thesis/mbpp/mbpp_energy.png', title: 'CPU Energy' },
        "32": {src: 'assets/docs/msc-thesis/mbpp/mbpp_time.png', title: 'Execution Time' },
        "33": {src: 'assets/docs/msc-thesis/mbpp/mbpp_energy_gain_percentage.png', title: 'CPU Energy Differences' },
        "34": {src: 'assets/docs/msc-thesis/mbpp/mbpp_execution_time_gain_percentage.png', title: 'Execution Time Differences' },
        "35": {src: 'assets/docs/msc-thesis/mbpp/mbpp_tokens_Mbpp_6.png', title: 'Number of tokens generated in prompt "Mbpp/6"' },
        "36": {src: 'assets/docs/msc-thesis/mbpp/mbpp_tokens_Mbpp_7.png', title: 'Number of tokens generated in prompt "Mbpp/7"' },
      },
    },
    CyberSecEval: {
      autocomplete: {
        "0-shot": {
          "37": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_0shot.png', title: 'Autocomplete Energy 0-Shot' },
          "38": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_0shot.png', title: 'Autocomplete Time 0-Shot' },
          "39": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_bleu_0shot.png', title: 'Autocomplete BLEU 0-Shot' },
          "40": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_passrate_0shot.png', title: 'Autocomplete PassRate 0-Shot' },
        },
        "3-shot": {
          "41": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_3shot.png', title: 'Autocomplete Energy 3-Shot' },
          "42": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_3shot.png', title: 'Autocomplete Time 3-Shot' },
          "43": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_bleu_3shot.png', title: 'Autocomplete BLEU 3-Shot' },
          "44": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_passrate_3shot.png', title: 'Autocomplete PassRate 3-Shot' },
        },
        "Other": {
          "45": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_energy_gains.png', title: 'Autocomplete Energy Gains' },
          "46": {src: 'assets/docs/msc-thesis/cyberseceval/autocomplete/autocomplete_time_gains.png', title: 'Autocomplete Time Gains' },
        },
      },
      instruct: {
        "0-shot": {
          "47": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_0shot.png', title: 'Instruct Energy 0-Shot' },
          "48": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_0shot.png', title: 'Instruct Time 0-Shot' },
          "49": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_bleu_0shot.png', title: 'Instruct BLEU 0-Shot' },
          "50": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_passrate_0shot.png', title: 'Instruct PassRate 0-Shot' },
        },
        "3-shot": {
          "51": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_3shot.png', title: 'Instruct Energy 3-Shot' },
          "52": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_3shot.png', title: 'Instruct Time 3-Shot' },
          "53": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_bleu_3shot.png', title: 'Instruct BLEU 3-Shot' },
          "54": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_passrate_3shot.png', title: 'Instruct PassRate 3-Shot' },
        },
        "Other": {
          "55": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_energy_gains.png', title: 'Instruct Energy Gains' },
          "56": {src: 'assets/docs/msc-thesis/cyberseceval/instruct/instruct_time_gains.png', title: 'Instruct Time Gains' },
        },
      },
      frr: {
        "57": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_energy.png', title: 'FRR Energy' },
        "58": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_time.png', title: 'FRR Time' },
        "59": {src: 'assets/docs/msc-thesis/cyberseceval/frr/frr_refusalrate.png', title: 'FRR Refusal Rate' },
      },
      canary_exploit: {
        "0-shot": {
          "60": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_energy_0shot.png', title: 'Canary Exploit Energy 0-Shot' },
          "61": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_time_0shot.png', title: 'Canary Exploit Time 0-Shot' },
          "62": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_score_0shot.png', title: 'Canary Exploit Score 0-Shot' },
        },
        "3-shot": {
          "63": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_energy_3shot.png', title: 'Canary Exploit Energy 3-Shot' },
          "64": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_time_3shot.png', title: 'Canary Exploit Time 3-Shot' },
          "65": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_score_3shot.png', title: 'Canary Exploit Score 3-Shot' },
        },
        "Other": {
          "66": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_energy_gains.png', title: 'Canary Exploit Energy Gains' },
          "67": {src: 'assets/docs/msc-thesis/cyberseceval/canary_exploit/canary_exploit_time_gains.png', title: 'Canary Exploit Time Gains' },
        },
      },
    },
  };

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
      console.log(category)
      console.log(selectedSubCategory)
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
    
    console.log(image);

  return (
    <div className="msc-thesis-container">
      <h1>Towards a Platform for Benchmarking Large Language Models</h1>
      <p >
  Author: <strong>Simão Pedro Sá Cunha</strong>
      </p>

      <div className="text-description">
          This dissertation presents the development of a comprehensive platform for evaluating Large Language
Models (LLMs) through benchmarking coding tasks with established datasets, including HumanEval-X,
MBPP+, and CyberSecEval. The primary objective of this platform is to assess not only the effectiveness,
energy efficiency and runtime of LLMs in generating code but also their security implications in software
development scenarios. By focusing on these critical aspects, the research aims to provide insights into
the practical applications of LLMs in various programming contexts
          <div className="text-description">
          The document thoroughly explores the project’s context, motivation, and objectives, emphasizing the
transformative influence of advanced LLMs, such as GPT-4 and Llama-2, on the software development
landscape. It investigates the challenges associated with the energy consumption of LLMs, particularly
when represented as quantized models - simplified (and smaller) models that are easier to run on hardware with limited resources - analysing their performance and resource requirements across different
programming languages and prompt engineering techniques
          <div className="text-description">
          Moreover, the research highlights the findings from the CyberSecEval benchmark, which evaluates
the security of generated code, revealing vulnerabilities inherent in the outputs of various LLMs. This
underscores the critical need to consider security alongside energy efficiency and execution time when
selecting an LLM for software development.
          <div className="text-description">
          Through an extensive analysis of LLM performance metrics, including functional correctness and code
quality, this dissertation contributes to the advancement of sustainable software engineering practices.
By prioritizing sustainability and security in LLM deployment, it offers a complete approach to software
development that follows the recent, but important, sustainable principles in software development.
          </div></div></div></div>

<p >
  Supervisors: <strong>João Saraiva</strong> and <strong>Francisco Ribeiro</strong>
</p>

    {/* Botões para PDFs (sempre visíveis) com URLs */}
    <div className="pdf-buttons">
        <h3>Related Documents</h3>
        <a href="assets/docs/msc-thesis/dissertation.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button">
          Dissertation
        </a>
        <a href="assets/docs/msc-thesis/pdr.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button">
          Pre Dissertation Report
        </a>
        <a href="assets/docs/msc-thesis/pdr_presentation.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button">
          PDR Presentation
        </a>
      </div>

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
            <img src={image.src} alt={image.title} className="selected-image" />
            <p className="image-title">{image.title}</p>
          </>
        )}
      </div>


      {/* Barra de Filtros para Imagens 
      <div className="filter-bar">
        {categories[selectedCategory]?.map((img) => (
          <button
            key={img.id}
            onClick={() => handleImageChange(img.id)}
            className={`filter-button ${selectedImageId === img.id ? 'active' : ''}`}
          >
            {img.title}
          </button>
        ))}
      </div>

      {/* Exibição da Imagem Selecionada 
      
      <div className="image-display">
        {selectedImage && (
          <>
            <img src={selectedImage.src} alt={selectedImage.title} className="selected-image" />
            <p className="image-title">{selectedImage.title}</p>
          </>
        )}
      </div>
      */}
    </div>
  );
};

export default MScThesis;
