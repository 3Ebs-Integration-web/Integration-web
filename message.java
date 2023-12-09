// Message.java
package com.example.etape1;

import android.os.Bundle;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class message extends AppCompatActivity {

    private TextView textViewMessage;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.meesage);

        textViewMessage = findViewById(R.id.textViewMessage);

        // Afficher le nombre total d'absences
        displayTotalAbsences();
    }

    private void displayTotalAbsences() {
        DatabaseReference totalAbsencesRef = FirebaseDatabase.getInstance().getReference("totalAbsences");

        totalAbsencesRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                long totalAbsences = 15;

                // Parcourir toutes les valeurs sous "totalAbsences" et les additionner
                for (DataSnapshot absenceSnapshot : dataSnapshot.getChildren()) {
                    long absenceValue = absenceSnapshot.getValue(Long.class);
                    totalAbsences += absenceValue;
                }

                // Calculer le taux d'absence
                double tauxAbsence = ((double) totalAbsences / 14) * 100;

                // Afficher le nombre total d'absences et le taux d'absence
                textViewMessage.setText("Nombre total d'absences : " + totalAbsences +
                        "\nTaux d'absence : " + tauxAbsence + "%");

                // Vérifier les règles
                if (tauxAbsence <= 20) {
                    // L'étudiant est dans les limites du taux d'absence toléré
                    // Il est autorisé à poursuivre la session principale
                    textViewMessage.append("\nL'étudiant est autorisé à poursuivre la session principale.");
                } else if (tauxAbsence <= 50) {
                    // L'étudiant dépasse le taux d'absence toléré
                    textViewMessage.append("\nL'étudiant est exclu du contrôle continu.");
                    textViewMessage.append("\nIl peut participer aux examens finaux de session.");
                    // Ajoutez d'autres actions à effectuer en fonction de vos règles
                } else {
                    // L'étudiant dépasse gravement le taux d'absence toléré
                    textViewMessage.append("\nL'étudiant est exclu de la session principale.");
                    // Ajoutez d'autres actions à effectuer en fonction de vos règles
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                // Handle database errors
            }
        });
    }
}




