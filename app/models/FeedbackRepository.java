package models;

import com.google.inject.ImplementedBy;



import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;


@ImplementedBy(JPAFeedbackRepository.class)
public interface FeedbackRepository {

    CompletionStage<Feedback> addfeedback(Feedback feedback);

}