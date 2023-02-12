# Skin-Disease-Detection
We decided to use the Skin Diseases Image Dataset from [kaggle](https://www.kaggle.com/datasets/ismailpromus/skin-diseases-image-dataset) and perform a Multi-Class Classification Problem.
Our vision is to create a Web Platform for users to upload or take a picture of some part of their body has visible skin disease symptoms and have our Machine Learning Model 
classify what type of skin disease this user might have. Afterwards, our pipeline would recommend a specific treatment plan to the user to ensure the user is getting the treatment needed. We have created multiples to test and experiment which Machine Learning Techniques were best suited for handling our specific
tasks. Specifically, we tested many different configurations for Convolutional Neural Networks(CNN's), [Inception V3](https://arxiv.org/abs/1512.00567), [ResNet](https://arxiv.org/abs/1512.03385v1),
and [DenseNet](https://arxiv.org/abs/1608.06993). 

# Project Setup
You can see our we have two folders: Skin Disease Detection Website and Skin-Disease-Dection-Models. The Skin Disease Dection Website folder contains all the code for a 
prototype web platform allowing users to interact and receive predictions and medical recommendations based on classified skin diseases.

The Skin-Disease-Dection-Models folder contains the Jupyter Notebooks of Python Code detailing our Data Exploration/Science Process and Machine Learning Training and Experimentation
process. 

# Project Summary
We started the problem by performing simple data exploration of our image dataset. We realized one label has roughly ~7000 images which was seven times the label with the smallest dataset. This clearly demonstrated class imbalance and the need to extensively clean our data. We encountered the issue that the CNN predicition model could predict the label with ~7000 images well but the other labels poorly due to bias affecting the model predictions.

For a quick project summary, we compared a total of 10 different model implementations on Multi-label Classification for 10 different types of skin diseases. Those models are Inception V3, ResNet, DenseNet, 10 Layered CNN, 10 Layered CNN + Dropout Layer, 8 Layer Cnn with SGD Optimizer, 8 Layer CNN with Adam Optimizer, 8 Layer CNN with Data Augmentation, 8 Layer CNN with Learning Rate of 0.001, 9 Layer CNN with CategoricalCrossEntropy. We found that the best performing model was the 8 Layer CNN with SGD Optimizer as it gave us the highest validation accuracy value of 0.69. We had high hopes for our Transfer Learning Models such as Inception V3, ResNet, DenseNet, however we found that there may be cases of overfitting the training data when using these larger complex models. For example, Inception V3 and DenseNet demonstrated overfitting as they performed really well on the training dataset but lacking significantly when classifiying on the validation data. Experimenting with ResNet we found that ResNet had trouble learning the underlying patterns of the labels and images as many iterations had really low train and validation accuracies.

# Future Prospects
We hope to implement an abundance of features do more extensive data analysis and Machine Learning Experimentation to get better and more detailed analysises on our Skin Disease Classification Model. For data exploration we would like to perform Dimension Reduction Analysis and Clustering to find inherent patterns in the labels. Additionally, performing [UMAP](https://umap-learn.readthedocs.io/en/latest/) analysis to further understand our data before modeling. Finally, to be able to check and remove "poisonous" data images affecting our label predictions.(Extensive data cleaning)

For the modeling aspect, we hope to be able to implement a more sophisticated version of [Data Augmentation](https://www.tensorflow.org/tutorials/images/data_augmentation) to help with class imbalances within the dataset as well as creating a large-enough dataset for modeling. Additionally, we wanted to implement [Image Segmentation](https://www.tensorflow.org/tutorials/images/segmentation) with TensorFlow in order to understand how and why the model is classifying certain images a certain label and being to understand what the model sees when making classifications. Of course, we wish to perform a more extensive [hyperparameter tuning](https://www.tensorflow.org/tutorials/keras/keras_tuner) procedure with gridsearch or bayesian search in order to find the best parameters for our model to get the best accuracies.

