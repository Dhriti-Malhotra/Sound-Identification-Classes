function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d4q7KaY1O/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}