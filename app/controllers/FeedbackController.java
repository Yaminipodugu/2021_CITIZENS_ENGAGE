package controllers;

import models.Feedback;
import models.FeedbackRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import static play.libs.Json.toJson;
//import views.html.*;

public class FeedbackController extends Controller{

    private final FormFactory formFactory;
    private final FeedbackRepository feedbackRepository;
    private final HttpExecutionContext ec;

    @Inject
    public FeedbackController(FormFactory formFactory, FeedbackRepository feedbackRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.feedbackRepository = feedbackRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok();
    }


  public  CompletionStage<Result> addFeedback() {

       Feedback feedback= Json.fromJson(request().body().asJson(),Feedback.class);

       return feedbackRepository.addfeedback(feedback).thenApplyAsync(us -> {

           return ok();
       }, ec.current());
   }

    /*public CompletionStage<Result> addFeedback() {

        JsonNode j = request().body().asJson();
        String Name = j.get("name").asText();
        String Email = j.get("email").asText();
        String message=j.get("message").asText();
        Long rating=j.get("rating").asLong();
        return FeedbackRepository.addfeedback(Name,Email,message,rating).thenApplyAsync(us-> {
            return ok("Edited");
        },  ec.current());
    }*/
}
