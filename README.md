# HOG3D Visualization

[![NumPy](https://img.shields.io/badge/NumPy-1.21.0+-blue.svg?style=flat&logo=numpy)](https://numpy.org/)
[![Plotly](https://img.shields.io/badge/Plotly-5.3.1+-orange.svg?style=flat&logo=plotly)](https://plotly.com/)

Welcome to the HOG3D Visualization repository! This project provides an interactive web interface to visualize the implementation and results of the Histogram of Oriented Gradients 3D (HOG3D) algorithm, particularly for detecting blocks in coronary arteries using medical imaging data in NIFTI format.

## Features

- **NumPy**: Efficient computation of gradient histograms in 3D.
- **Plotly**: Interactive 3D plots for visualizing HOG3D features.

## Repository Structure

- **HOG3D.ipynb**: Jupyter Notebook demonstrating the implementation of HOG3D.
- **HOG3D.pdf**: Detailed explanation of the HOG3D implementation.

## Getting Started

### Prerequisites

- [NumPy](https://numpy.org/)
- [Plotly](https://plotly.com/python/)
- [nibabel](https://nipy.org/nibabel/)
- [scipy](https://www.scipy.org/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Pranav-Karra-3301/HOG3D-Visualization.git
    cd hog3d
    ```

2. Install the required Python packages:
    ```bash
    pip install numpy plotly nibabel scipy
    ```

### Running the Jupyter Notebook

Open `HOG3D.ipynb` in Jupyter Notebook to explore the implementation of the HOG3D algorithm.

## Usage

### View Notebook
Explore the detailed implementation of the HOG3D algorithm in the Jupyter Notebook. [View Notebook](code.html)

### View Graphs
Interact with the 3D plots generated using Plotly. [View Graphs](https://hog3d-visual.vercel.app)

### View GitHub
Check out the source code and contribute to the project. [View GitHub](https://github.com/Pranav-Karra-3301)

## Numpy Implementation of HOG3D

The HOG3D (Histogram of Oriented Gradients 3D) implementation is developed using NumPy to facilitate efficient computation of gradient histograms in 3D. This implementation is designed to work with medical imaging data, particularly for detecting blocks in coronary arteries. The notebook provided demonstrates how to apply the HOG3D algorithm to NIFTI (.nii or .nii.gz) files, which are commonly used in medical imaging.

## Explanation of Implementation

For a detailed explanation of the HOG3D implementation, refer to the provided PDF document below. It includes step-by-step instructions and insights into the algorithm.

<object data="HOG3D.pdf" type="application/pdf" width="800" height="600">
    <p>Your browser does not support PDFs. <a href="HOG3D.pdf">Download the PDF</a>.</p>
</object>
