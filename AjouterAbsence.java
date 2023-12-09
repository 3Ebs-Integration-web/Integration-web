package com.example.etape1;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;

public class AjouterAbsence extends AppCompatActivity {

    private EditText editTextNomEtudiant;
    private RadioGroup radioGroup;
    private Button buttonAjouterAbsence;
    private TextView textViewNombreAbsences;
    private View textViewRetour;

    private DatabaseReference myRef;
    private ArrayList<String> listeNomsEtudiants = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.absence);

        editTextNomEtudiant = findViewById(R.id.nomEtudiant);
        radioGroup = findViewById(R.id.radioGroup);
        buttonAjouterAbsence = findViewById(R.id.buttonAjouterAbsence);
        textViewNombreAbsences = findViewById(R.id.nombreAbsences);
        textViewRetour = findViewById(R.id.retour);

        FirebaseDatabase database = FirebaseDatabase.getInstance();
        myRef = database.getReference("absences");

        buttonAjouterAbsence.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String nomEtudiant = editTextNomEtudiant.getText().toString();

                if (nomEtudiant.isEmpty()) {
                    Toast.makeText(AjouterAbsence.this, "Veuillez remplir tous les champs.", Toast.LENGTH_SHORT).show();
                    return;
                }

                int selectedId = radioGroup.getCheckedRadioButtonId();
                String presenceStatus = "P";  // Default to Present
                if (selectedId == R.id.radioButtonAbsent) {
                    presenceStatus = "A";  // If Absent radio button is selected
                    increaseAbsenceCount(nomEtudiant);  // Increase absence count only for Absent
                }

                myRef.child(nomEtudiant).push().setValue(" " + presenceStatus);

                if (!listeNomsEtudiants.contains(nomEtudiant) && presenceStatus.equals("A")) {
                    listeNomsEtudiants.add(nomEtudiant);
                }

                updateAbsencesCount();
            }
        });

        textViewRetour.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(AjouterAbsence.this, menuu.class);
                startActivity(intent);
            }
        });
    }

    // AjouterAbsence.java

// ...

    private void updateAbsencesCount() {
        int nombreAbsences = listeNomsEtudiants.size();
        textViewNombreAbsences.setText("Nombre d'absences : " + nombreAbsences);

        myRef.child(editTextNomEtudiant.getText().toString()).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                long totalAbsences = dataSnapshot.getChildrenCount();
                textViewNombreAbsences.setText("Nombre total d'absences : " + totalAbsences);

                // Stockez le nombre total d'absences dans Firebase
                myRef.child("totalAbsences").setValue(totalAbsences);


            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                // Handle database errors
            }
        });
    }

// ...


    private void increaseAbsenceCount(String nomEtudiant) {
        // Increase absence count in your data structure or database
        // You can implement this based on your specific data structure
        // For example, you might have a separate "absenceCount" field for each student
    }
}

